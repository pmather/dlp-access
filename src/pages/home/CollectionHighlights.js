import React, { Component } from "react";
import FileGetter from "../../lib/FileGetter";

import "../../css/CollectionHighlights.scss";

class CollectionHighlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightImgs: []
    };
  }

  getSignedLinks = async () => {
    const highlights = this.props.collectionHighlights;
    const imgUrls = [];
    for (const highlight in highlights) {
      const fileGetter = new FileGetter();
      const highlightImgSrc = await fileGetter.getFile(
        highlights[highlight].src,
        "image",
        this,
        "highlights",
        this.props?.site?.siteId,
        "public/sitecontent"
      );
      imgUrls.push(highlightImgSrc);
    }
    this.setState({ highlightImgs: imgUrls });
  };

  componentDidMount = async () => {
    if (this.props.collectionHighlights) {
      this.getSignedLinks();
    }
  };

  render() {
    if (
      this.props.collectionHighlights &&
      this.props.collectionHighlights.length > 0 &&
      this.props.collectionHighlights.length === this.state.highlightImgs.length
    ) {
      const tiles = this.props.collectionHighlights.map((item, index) => {
        return (
          <div
            className="col-md-6 col-lg-3"
            key={index}
            role="group"
            aria-roledescription="category card"
          >
            <a href={item.link}>
              <div
                className="category-container"
                style={{
                  backgroundImage: `url(${this.state.highlightImgs[index]})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
              >
                <div className="category-details">
                  <span>{item.itemCount}</span>
                  <h3>{item.title}</h3>
                </div>
                <div className="category-link">
                  <p>
                    Explore<i className="fal fa-arrow-right"></i>
                  </p>
                </div>
              </div>
            </a>
          </div>
        );
      });

      return (
        <div
          className="collection-highlights-wrapper"
          role="region"
          aria-roledescription="Collection highlights"
          aria-label="Collection Highlights"
        >
          <div className="collection-highlights-heading">
            <h2>Collection Highlights</h2>
          </div>
          <div className="row justify-content-center">{tiles}</div>
        </div>
      );
    } else {
      return <> </>;
    }
  }
}

export default CollectionHighlights;
