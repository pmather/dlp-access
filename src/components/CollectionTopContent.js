import React, { Component } from "react";
import { addNewlineInDesc } from "../lib/MetadataRenderer";
import "../css/CollectionsShowPage.scss";
import FileGetter from "../lib/FileGetter";

class CollectionTopContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionTruncated: true,
      collectionThumbnail: "",
      rss: ""
    };
    this.fileGetter = new FileGetter();
  }

  getDescription() {
    let section = <></>;
    let description = this.props.description;
    let visibleText = null;
    if (description?.length && this.state.descriptionTruncated) {
      visibleText = [];
      visibleText.push(
        description[0].substring(0, this.props.TRUNCATION_LENGTH)
      );
    }

    if (description?.length) {
      section = (
        <div
          className={`description ${
            this.state.descriptionTruncated ? "trunc" : "full"
          }`}
          id="collection-description"
        >
          <div>
            {addNewlineInDesc(visibleText || description, this.props.headings)}{" "}
            {this.moreLessButtons(this.props.description)}
          </div>
        </div>
      );
    }
    return section;
  }

  moreLessButtons(text) {
    let moreLess = <></>;
    if (
      (text[0] && text[0].length >= this.props.TRUNCATION_LENGTH) ||
      text.length > 1
    ) {
      moreLess = (
        <span>
          <button
            onClick={e => this.onMoreLessClick(e)}
            className="more"
            type="button"
            aria-controls="collection-description"
            aria-expanded="false"
          >
            . . .[more]
          </button>
          <button
            onClick={e => this.onMoreLessClick(e)}
            className="less"
            type="button"
            aria-controls="collection-description"
            aria-expanded="true"
          >
            . . .[less]
          </button>
        </span>
      );
    }
    return moreLess;
  }

  onMoreLessClick(e) {
    e.preventDefault();
    let truncated = true;
    if (this.state.descriptionTruncated) {
      truncated = false;
    }
    this.setState({ descriptionTruncated: truncated }, function() {
      this.render();
    });
  }

  createRssHtml(rssUrl, className, imageUrl, alt) {
    const rssLinks = `<li>
          <a href="${rssUrl}" target="_blank" rel="noopener noreferrer" class="${className}">
            <img
              src="${imageUrl}"
              alt="${alt}"
            />
          </a>
        </li>`;
    return rssLinks;
  }

  getFeeds = () => {
    let links = this.props.collectionOptions.podcast_links.map(link => {
      if (link.indexOf("amazon.com") >= 0) {
        return (
          <div
            key={link}
            dangerouslySetInnerHTML={{
              __html: this.createRssHtml(
                link,
                "border-square",
                "https://static.lib.vt.edu/vtdlp/images/Amazon.png",
                "Listen on Amazon Music"
              )
            }}
          />
        );
      } else if (link.indexOf("apple.com") >= 0) {
        return (
          <div
            key={link}
            dangerouslySetInnerHTML={{
              __html: this.createRssHtml(
                link,
                "border-square",
                "https://static.lib.vt.edu/vtdlp/images/Apple.svg",
                "Listen on Apple Music"
              )
            }}
          />
        );
      } else if (
        link.indexOf("goo.gl") >= 0 ||
        link.indexOf("google.com") >= 0
      ) {
        return (
          <div
            key={link}
            dangerouslySetInnerHTML={{
              __html: this.createRssHtml(
                link,
                "border-curved",
                "https://static.lib.vt.edu/vtdlp/images/Google.svg",
                "Listen on Google Podcasts"
              )
            }}
          />
        );
      } else if (link.indexOf("spotify.com") >= 0) {
        return (
          <div
            key={link}
            dangerouslySetInnerHTML={{
              __html: this.createRssHtml(
                link,
                "badge-outline",
                "https://static.lib.vt.edu/vtdlp/images/Spotify.png",
                "Listen on Spotify"
              )
            }}
          />
        );
      } else if (link.indexOf("stitcher.com") >= 0) {
        return (
          <div
            key={link}
            dangerouslySetInnerHTML={{
              __html: this.createRssHtml(
                link,
                "border-square",
                "https://static.lib.vt.edu/vtdlp/images/Stitcher.png",
                "Listen on Stitcher"
              )
            }}
          />
        );
      } else if (link.indexOf("breaker.audio") >= 0) {
        return (
          <div
            key={link}
            dangerouslySetInnerHTML={{
              __html: this.createRssHtml(
                link,
                "badge-outline",
                "https://static.lib.vt.edu/vtdlp/images/breaker--white.svg",
                "Listen on Breaker"
              )
            }}
          />
        );
      } else if (link.indexOf("radiopublic.com") >= 0) {
        return (
          <div
            key={link}
            dangerouslySetInnerHTML={{
              __html: this.createRssHtml(
                link,
                "border-square",
                "https://static.lib.vt.edu/vtdlp/images/radiopublic-white.png",
                "Listen on Radio Public"
              )
            }}
          />
        );
      } else if (link.indexOf("pocketcasts.com") >= 0) {
        return (
          <div
            key={link}
            dangerouslySetInnerHTML={{
              __html: this.createRssHtml(
                link,
                "border-square",
                "https://static.lib.vt.edu/vtdlp/images/pocketcasts.png",
                "Listen on Pocket Casts"
              )
            }}
          />
        );
      } else if (link.indexOf("tunein.com") >= 0) {
        return (
          <div
            key={link}
            dangerouslySetInnerHTML={{
              __html: this.createRssHtml(
                link,
                "border-square",
                "https://static.lib.vt.edu/vtdlp/images/tunein.png",
                "Listen on Tune In"
              )
            }}
          />
        );
      } else if (link.indexOf("podchaser.com") >= 0) {
        return (
          <div
            key={link}
            dangerouslySetInnerHTML={{
              __html: this.createRssHtml(
                link,
                "border-square",
                "https://static.lib.vt.edu/vtdlp/images/podchaser.png",
                "Listen on Pod Chaser"
              )
            }}
          />
        );
      } else if (link.indexOf("podbean.com") >= 0) {
        return (
          <div
            key={link}
            dangerouslySetInnerHTML={{
              __html: this.createRssHtml(
                link,
                "border-square",
                "https://static.lib.vt.edu/vtdlp/images/podbean.png",
                "Listen on Podbean"
              )
            }}
          />
        );
      } else if (link.indexOf("castbox.fm") >= 0) {
        return (
          <div
            key={link}
            dangerouslySetInnerHTML={{
              __html: this.createRssHtml(
                link,
                "border-square",
                "https://static.lib.vt.edu/vtdlp/images/Castbox.svg",
                "Listen on Castbox"
              )
            }}
          />
        );
      } else {
        console.log(`Error: ${link}`);
        return <></>;
      }
    });

    return links;
  };

  getRSS = () => {
    if (this.state.rss) {
      return (
        <li className="custom-badge" key="rss">
          <a href={this.state.rss} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-rss"></i>
            RSS Link
          </a>
        </li>
      );
    }
  };

  creatorDates(creator) {
    if (creator) {
      return <span className="creator">Created by: {creator}</span>;
    } else {
      return <span></span>;
    }
  }

  getWebFeed = async () => {
    let signed;
    if (this.props.siteId === "podcasts") {
      signed = await this.fileGetter.getFile(
        `rss/${this.props.customKey}.rss`,
        "text",
        this,
        "webFeed",
        this.props.siteId,
        "public/sitecontent"
      );
    }
    return signed;
  };

  getSignedThumbnailLink = () => {
    this.fileGetter.getFile(
      this.props.collectionImg,
      "image",
      this,
      "collectionThumbnail",
      this.props.siteId,
      "public/sitecontent"
    );
  };

  componentDidUpdate(prevProps) {
    if (this.props.collectionImg !== prevProps.collectionImg) {
      this.getSignedThumbnailLink();
    }
  }

  componentDidMount() {
    if (this.props.collectionImg) {
      this.getSignedThumbnailLink();
    }
    this.getWebFeed();
  }

  render() {
    return (
      <div
        className="top-content-row row"
        role="region"
        aria-labelledby="collection-page-title"
      >
        <div className="collection-img-col col-sm-4">
          <img src={this.state.collectionThumbnail} alt="" />
        </div>
        <div className="collection-details-col col-md-8">
          <h1 className="collection-title" id="collection-page-title">
            {this.props.collectionTitle}
          </h1>
          <div className="post-heading">
            {this.creatorDates(this.props.creator)}
            <span className="last-updated">
              Last updated: {new Date(this.props.updatedAt).toString()}
            </span>
          </div>
          <div
            className={`description ${
              this.state.descriptionTruncated ? "trunc" : "full"
            }`}
            id="collection-description"
          >
            <div>{this.getDescription()}</div>
          </div>
          {this.props.siteId === "podcasts" ? (
            <ul className="feed-links">
              {this?.props?.collectionOptions?.podcast_links?.length ? (
                this.getFeeds()
              ) : (
                <></>
              )}
              {this.getRSS()}
            </ul>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default CollectionTopContent;
