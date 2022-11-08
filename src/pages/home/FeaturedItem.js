import React, { Component } from "react";
import FileGetter from "../../lib/FileGetter";

class FeaturedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featured: null
    };
    this.fileGetter = null;
  }

  getFeaturedItem = async () => {
    const imgUrl = this.props.tile.src;
    this.fileGetter = new FileGetter();
    await this.fileGetter.getFile(
      imgUrl,
      "image",
      this,
      "featured",
      this.props?.site?.siteId,
      "public/sitecontent"
    );
    this.fileGetter = null;
  };

  componentDidUpdate(prevProps) {
    if (this?.props?.tile !== prevProps?.tile) {
      this.getFeaturedItem();
    }
  }

  componentDidMount() {
    this.getFeaturedItem();
  }

  componentWillUnmount() {
    this.fileGetter = null;
  }

  render() {
    if (this.props.tile && this.state.featured) {
      return (
        <div
          className="col-md-6 col-lg-3"
          role="group"
          aria-roledescription="slide"
          aria-label={`${this.props.position} of ${this.props.length}`}
          style={
            this.props.tile.active ? { display: "block" } : { display: "none" }
          }
        >
          <a href={this.props.tile.link}>
            <div className="card">
              <img className="card-img-top" src={this.state.featured} alt="" />
              <div className="card-body">
                <h3 className="card-title crop-text-4">
                  {this.props.tile.cardTitle}
                </h3>
              </div>
            </div>
          </a>
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default FeaturedItem;
