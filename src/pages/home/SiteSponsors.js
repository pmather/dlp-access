import React, { Component } from "react";
import FileGetter from "../../lib/FileGetter";

import "../../css/SiteSponsors.scss";

class SiteSponsors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sponsorImgs: []
    };
  }

  getSignedLinks = async () => {
    const sponsors = this.props.sponsors;
    const imgUrls = [];
    for (const sponsor in sponsors) {
      const fileGetter = new FileGetter();
      const sponsorImgSrc = await fileGetter.getFile(
        sponsors[sponsor].src,
        "image",
        this,
        "sponsors",
        this.props?.site?.siteId,
        "public/sitecontent"
      );
      imgUrls.push(sponsorImgSrc);
    }
    this.setState({ sponsorImgs: imgUrls });
  };

  componentDidMount() {
    if (this.props.sponsors && this.props.sponsors.length !== 0) {
      this.getSignedLinks();
    }
  }

  render() {
    if (
      this.props.sponsors &&
      this.props.sponsors.length !== 0 &&
      this.props.sponsors.length === this.state.sponsorImgs.length
    ) {
      return (
        <div
          className={
            this.props.style
              ? `container home-sponsors-section sponsors-${this.props.style}`
              : "container home-sponsors-section"
          }
          role="region"
          aria-label="Sponsors"
        >
          <div className="row home-sponsors-wrapper">
            {this.props.sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="col-6 col-md-4 col-lg-3 sponsor-wrapper"
              >
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={this.state.sponsorImgs[index]}
                    alt={sponsor.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default SiteSponsors;
