import React from "react";

const PreIngestTable = props => {
  const dataRows = [];
  const emptyIdentifiers = [];
  const invalidRecords = [];
  let allValid = false;

  const fileDetails = path => {
    let fileRecord = null;
    for (const file of props.files) {
      if (file.webkitRelativePath === path) {
        fileRecord = file;
      }
    }
    return (
      <span>
        <span className="file-detail type">
          <b>Type:</b> {fileRecord.type}
        </span>
        <span className="file-detail size">
          <b>Size:</b> {props.fileSizeFormat(fileRecord.size)}
        </span>
        <span className="file-detail modified">
          <b>Last Modified:</b> {dateFormat(fileRecord.lastModified)}
        </span>
      </span>
    );
  };

  const dateFormat = timestamp => {
    const date = new Date(timestamp);
    return `${date.toLocaleString()}`;
  };

  for (const [idx, row] of props.csvData.entries()) {
    if (
      (!("Identifier" in row) || !row.Identifier) &&
      (!("Title" in row) || !row.Title)
    ) {
      invalidRecords.push(
        <span className="invalid-record" key={idx + 1}>
          Missing Identifer and Title in row: {idx + 1}
        </span>
      );
    } else if (!("Identifier" in row) || !row.Identifier) {
      invalidRecords.push(
        <span className="invalid-record" key={idx + 1}>
          Missing Identifer in row: {idx + 1}
        </span>
      );
    } else if (!("Title" in row) || !row.Title) {
      invalidRecords.push(
        <span className="invalid-record" key={idx + 1}>
          Missing Title in row: {idx + 1}
        </span>
      );
    }
  }
  if (!invalidRecords.length) {
    allValid = true;
  }
  for (const identifier in props.byIdentifier) {
    if (!!props.byIdentifier[identifier].length) {
      dataRows.push(
        <div key={identifier} className="identifier-record">
          <span key={identifier}>{identifier}</span>{" "}
          <span key={identifier + "_length"} className="files-length">
            Files: {props.byIdentifier[identifier].length}
          </span>
          {!!props.byIdentifier[identifier].length &&
            props.byIdentifier[identifier].map(path => {
              return (
                <div className="file-record" key={path}>
                  <span>{path}</span>
                  <span>{fileDetails(path)}</span>
                </div>
              );
            })}
        </div>
      );
    } else {
      emptyIdentifiers.push(
        <div key={identifier} className="identifier-record">
          <span key={identifier}>{identifier}</span>{" "}
          <span key={identifier + "_length"} className="files-length">
            Files: {props.byIdentifier[identifier].length}
          </span>
        </div>
      );
    }
  }

  return (
    <div>
      <hr />
      <h3>Invalid metadata records:</h3>
      <div id="invalid-records">{invalidRecords}</div>
      {allValid && (
        <div className="all-records-valid">
          All metadata records are valid. Good job!
        </div>
      )}
      <hr />
      <h3>Identifiers and associated files:</h3>
      <div id="identifiers-files">{dataRows}</div>
      <hr />
      <h3>Identifiers with no associated files:</h3>
      <div id="empty-identifiers">{emptyIdentifiers}</div>
      <hr />
    </div>
  );
};

export { PreIngestTable };
