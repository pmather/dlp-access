import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import "@aws-amplify/ui-react/styles.css";
import "../../../css/adminForms.scss";
import { PreIngestTable } from "./PreIngestTable";

const ignoreFiles = [".DS_Store"];

class PreIngestCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalFiles: 0,
      totalBytes: 0,
      byIdentifier: null,
      files: [],
      csvData: []
    };
  }

  csvToObj(text, headers, quoteChar = '"', delimiter = ",") {
    const regex = new RegExp(
      `\\s*(${quoteChar})?(.*?)\\1\\s*(?:${delimiter}|$)`,
      "gs"
    );

    const match = line =>
      [...line.matchAll(regex)]
        .map(m => m[2]) // we only want the second capture group
        .slice(0, -1); // cut off blank match at the end

    const lines = text.split("\n");
    const heads = headers ?? match(lines.shift());

    return lines.map(line => {
      return match(line).reduce((acc, cur, i) => {
        const val = cur.length <= 0 ? null : Number(cur) || cur;
        const key = heads[i] ?? `extra_${i}`;
        return { ...acc, [key]: val };
      }, {});
    });
  }

  handleCSVInputChange = async event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = event => {
      const text = event.target.result;
      const jsonResult = this.csvToObj(text);
      this.setState({ csvData: jsonResult, metadataFile: file }, () => {
        if (this.state.files.length && this.state.csvData.length) {
          this.generateReports();
        }
      });
    };
    reader.readAsText(file);
  };

  handleDirInputChange = async event => {
    let files = [];
    let totalBytes = 0;
    let totalFiles = 0;
    for (const file of event.target.files) {
      if (
        ignoreFiles.indexOf(file.name) === -1 &&
        file.name !== this.state.metadataFile.name
      ) {
        files.push(file);
        totalBytes += file.size;
        totalFiles++;
      }
    }
    this.setState(
      {
        totalFiles: totalFiles,
        totalBytes: totalBytes,
        files: files
      },
      () => {
        this.generateReports();
      }
    );
  };

  fileSizeFormat = bytes => {
    const thresh = 1024;
    const decimalPlaces = 2;

    if (Math.abs(bytes) < thresh) {
      return bytes + " B";
    }
    const units = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
    let u = -1;
    const r = 10 ** decimalPlaces;

    do {
      bytes /= thresh;
      ++u;
    } while (
      Math.round(Math.abs(bytes) * r) / r >= thresh &&
      u < units.length - 1
    );

    return bytes.toFixed(decimalPlaces) + " " + units[u];
  };

  generateReports = () => {
    const byIdentifier = {};
    for (const row of this.state.csvData) {
      byIdentifier[row.Identifier] = [];

      for (const file of this.state.files) {
        if (file.webkitRelativePath.indexOf(row.Identifier) !== -1) {
          byIdentifier[row.Identifier].push(file.webkitRelativePath);
        }
      }
    }
    this.setState({ byIdentifier: byIdentifier });
  };

  passClickEvent = event => {
    const buttonId = event.target.id.replace("select", "input");
    const button = document.getElementById(buttonId);
    if (button) {
      button.click();
    }
  };

  render() {
    return (
      <div>
        <NavLink className="back-link" to="/siteAdmin">
          {" "}
          Return to Site Admin page{" "}
        </NavLink>
        <div className="form-wrapper" key="csv-select-form">
          <p>1. Upload your metadata (csv format).</p>
          <Form className="csv-select-form">
            <input
              id="csv-file-input"
              type="file"
              onChange={this.handleCSVInputChange}
            ></input>
            <button
              id="csv-file-select"
              className="submit"
              onClick={this.passClickEvent}
            >
              Select Metadata CSV
            </button>{" "}
            <span>{this.state.metadataFile?.name || ""}</span>
          </Form>
        </div>
        <div>
          <p>2. Select the directory that contains your digital objects.</p>
          <Form className="dir-select-form">
            <input
              id="dir-file-input"
              type="file"
              webkitdirectory=""
              directory=""
              onChange={this.handleDirInputChange}
            ></input>
            <button
              id="dir-file-select"
              className="submit"
              onClick={this.passClickEvent}
            >
              Select Repository Directory
            </button>
          </Form>
        </div>
        <div className="dir-data">
          <div className="dir-totals">
            <div className="metadata-records">
              <span>Metadata records: </span>
              <span>{this.state.csvData?.length || 0}</span>
            </div>
            <div className="total-files">
              <span>Total files: </span>
              <span>{this.state.totalFiles}</span>
            </div>
            <div className="total-bites">
              <span>Total size of files: </span>
              <span>{this.fileSizeFormat(this.state.totalBytes)}</span>
            </div>
          </div>
          {!!this.state.csvData.length &&
            !!this.state.files.length &&
            this.state.byIdentifier !== null && (
              <PreIngestTable
                files={this.state.files}
                byIdentifier={this.state.byIdentifier}
                fileSizeFormat={this.fileSizeFormat}
                csvData={this.state.csvData}
              />
            )}
        </div>
      </div>
    );
  }
}

export default PreIngestCheck;
