import React, { Component } from "react";
import { getFileContent } from "../lib/fetchTools";
import { cleanHTML } from "../lib/MetadataRenderer";

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
    const copyUrl = copyObj.data_url;
    getFileContent(copyUrl, "html", this);
  }

  render() {
    return (
      <div className="additional-pages-wrapper">
        {cleanHTML(this.state.copy, "page")}
      </div>
    );
  }
}

export default AdditionalPages;
