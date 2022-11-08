import React, { Component } from "react";
import FeaturedStaticImage from "./home/FeaturedStaticImage";
import SearchBar from "../components/SearchBar";
import HomeStatement from "./home/HomeStatement";
import SiteTitle from "../components/SiteTitle";
import FeaturedItems from "./home/FeaturedItems";
import MultimediaSection from "./home/MultimediaSection";
import SiteSponsors from "./home/SiteSponsors";
import CollectionHighlights from "./home/CollectionHighlights";

import "../css/HomePage.scss";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staticImgLoaded: false,
      hasMediaSection: false
    };
  }

  hasMediaSection() {
    const homePageInfo = JSON.parse(this.props.site.homePage);
    return !!(
      homePageInfo.mediaSection &&
      homePageInfo.mediaSection.link &&
      homePageInfo.mediaSection.mediaEmbed &&
      homePageInfo.mediaSection.title &&
      homePageInfo.mediaSection.text
    );
  }

  getStyles = styles => {
    let titleStyle = {
      fontFamily: styles.titleFont || "crimson-text, serif",
      textTransform: styles.textStyle || "uppercase"
    };
    return titleStyle;
  };

  staticImgLoaded = () => {
    this.setState({ staticImgLoaded: true });
    return true;
  };

  componentDidUpdate(prevProps) {
    const homePageInfo = JSON.parse(this.props.site.homePage);
    const prevHomePage = JSON.parse(prevProps.site.homePage);
    if (
      prevHomePage?.mediaSection?.link !== homePageInfo?.mediaSection?.link ||
      prevHomePage?.mediaSection?.mediaEmbed !==
        homePageInfo?.mediaSection?.mediaEmbed ||
      prevHomePage?.mediaSection?.title !== homePageInfo?.mediaSection?.title ||
      prevHomePage?.mediaSection?.text !== homePageInfo?.mediaSection?.text
    ) {
      this.setState({ hasMediaSection: this.hasMediaSection() });
    }
  }

  componentDidMount() {
    this.setState({ hasMediaSection: this.hasMediaSection() });
  }

  render() {
    let featuredItems = null;
    let homeStatement = null;
    let staticImage = null;
    let mediaSection = null;
    let sponsors = null;
    let sponsorsStyle = null;
    let collectionHighlights = null;
    try {
      const homePageInfo = JSON.parse(this.props.site.homePage);
      featuredItems = homePageInfo["featuredItems"];
      homeStatement = homePageInfo["homeStatement"];
      staticImage = homePageInfo["staticImage"];
      mediaSection = homePageInfo["mediaSection"];
      sponsors = homePageInfo["sponsors"];
      sponsorsStyle = homePageInfo["sponsorsStyle"];
      collectionHighlights = homePageInfo["collectionHighlights"];
    } catch (error) {
      console.error("Error setting config property");
    }
    return (
      <>
        <SiteTitle siteTitle={this.props.site.siteTitle} pageTitle="Home" />
        <div className="home-wrapper">
          <div className="home-featured-image-wrapper">
            <FeaturedStaticImage
              staticImage={staticImage}
              site={this.props.site}
              staticImgLoaded={this.staticImgLoaded.bind(this)}
            />
            <div id="home-site-title-wrapper">
              <h1 style={this.getStyles(staticImage)}>
                {this.props.site.siteName}
              </h1>
            </div>
          </div>
          <div className="home-search-wrapper">
            <SearchBar
              view="gallery"
              searchField="title"
              q=""
              setPage={this.props.setPage}
            />
          </div>
          <HomeStatement homeStatement={homeStatement} />
          <div className="home-nav-links">
            <a href="/search">View All Items</a>
            <a href="/collections">View All Collections</a>
          </div>
          {this.state.staticImgLoaded && (
            <div>
              <FeaturedItems
                featuredItems={featuredItems}
                site={this.props.site}
              />
            </div>
          )}
          {this.state.hasMediaSection && (
            <div>
              <MultimediaSection mediaSection={mediaSection} />
            </div>
          )}
          {this.state.staticImgLoaded && (
            <div>
              <SiteSponsors
                sponsors={sponsors}
                style={sponsorsStyle}
                site={this.props.site}
              />
              <CollectionHighlights
                collectionHighlights={collectionHighlights}
                site={this.props.site}
              />
            </div>
          )}
        </div>
      </>
    );
  }
}

export default HomePage;
