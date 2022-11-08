import React, { Component } from "react";
import "../css/Thumbnail.scss";
import FileGetter from "../lib/FileGetter";

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnailImg: null
    };
    this.fileGetter = new FileGetter();
  }

  labelDisplay() {
    if (this.props.label) {
      return (
        <div className={`${this.props.category}-label`}>
          {this.props.category === "collection" ? "Collection" : "Item"}
        </div>
      );
    } else {
      return <></>;
    }
  }

  componentDidUpdate(prevProps) {
    const prevImgURL = prevProps.imgURL || prevProps.item.thumbnail_path;
    const imgURL = this.props.imgURL || this.props.item.thumbnail_path;
    if (imgURL && prevImgURL !== imgURL) {
      this.fileGetter.getFile(
        imgURL,
        "image",
        this,
        "thumbnailImg",
        this.props.site.siteId,
        "public/sitecontent"
      );
    }
  }

  componentDidMount() {
    const imgURL = this.props.imgURL || this.props.item.thumbnail_path;
    if (imgURL) {
      this.fileGetter.getFile(
        imgURL,
        "image",
        this,
        "thumbnailImg",
        this.props.site.siteId,
        "public/sitecontent"
      );
    }
  }

  render() {
    return (
      <div className="image-container">
        {this.labelDisplay()}
        <img
          className={this.props.className}
          src={this.state.thumbnailImg}
          alt={this.props.altText ? this.props.item.title : ""}
        />
      </div>
    );
  }
}

export default Thumbnail;
