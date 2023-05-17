import React, { Component } from "react";
import { getFileContent, getPageContentById } from "../lib/fetchTools";
import { cleanHTML } from "../lib/MetadataRenderer";

import "../css/Editor.scss";
import "../css/AdditionalPages.scss";

class AdditionalPages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copy: ""
    };
  }

  componentDidMount() {
    let copyObj = JSON.parse(this.props.site.sitePages)[this.props.parentKey];
    if (copyObj.children && this.props.childKey) {
      copyObj = copyObj.children[this.props.childKey];
    }
    const { data_url, useDataUrl, pageContentId } = copyObj;
    if (data_url && useDataUrl) {
      getFileContent(data_url, "html", this);
    } else if (pageContentId) {
      getPageContentById(pageContentId).then(resp => {
        this.setState({
          copy: resp
        });
      });
    }
  }

  render() {
    return (
      <div className="additional-pages-wrapper quill-styles">
        {cleanHTML(this.state.copy, "page")}
      </div>
    );
  }
}

export default AdditionalPages;
