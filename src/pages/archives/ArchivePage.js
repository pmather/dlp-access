import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { API, graphqlOperation } from "aws-amplify";
import PDFViewer from "../../components/PDFViewer";
import { KalturaPlayer } from "../../components/KalturaPlayer";
import MiradorViewer from "../../components/MiradorViewer";
import { OBJModel } from "react-3d-viewer";
import { MediaElement } from "../../components/MediaElement";
import SearchBar from "../../components/SearchBar";
import Breadcrumbs from "../../components/Breadcrumbs.js";
import SiteTitle from "../../components/SiteTitle";
import {
  RenderItemsDetailed,
  addNewlineInDesc
} from "../../lib/MetadataRenderer";
import {
  fetchLanguages,
  getTopLevelParentForCollection
} from "../../lib/fetchTools";
import { buildRichSchema } from "../../lib/richSchemaTools";
import { searchArchives } from "../../graphql/queries";
import RelatedItems from "../../components/RelatedItems";
import Citation from "../../components/Citation";
import { Thumbnail } from "../../components/Thumbnail";
import MtlElement from "../../components/MtlElement";
import X3DElement from "../../components/X3DElement";
import SocialButtons from "../../components/SocialButtons";
import { DownloadLinks } from "../../components/DownloadLinks";
import ReactGA from "react-ga4";

import "../../css/ArchivePage.scss";
import { NotFound } from "../NotFound";

class ArchivePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      collectionCustomKey: "",
      collectionTitle: "",
      page: 0,
      category: "archive",
      searchField: "title",
      view: "Gallery",
      info: {},
      languages: null,
      isError: false
    };
  }

  async getArchive(customKey) {
    const options = {
      order: "ASC",
      limit: 1,
      filter: {
        item_category: { eq: process.env.REACT_APP_REP_TYPE.toLowerCase() },
        visibility: { eq: true },
        custom_key: {
          eq: `ark:/53696/${this.props.customKey}`
        }
      }
    };
    const response = await API.graphql(
      graphqlOperation(searchArchives, options)
    );
    try {
      const item = response.data.searchArchives.items[0];
      const topLevelParentCollection = await getTopLevelParentForCollection(
        item
      );

      const collectionCustomKey = topLevelParentCollection.custom_key;
      const archiveSchema = this.buildArchiveSchema(item);
      this.setState({
        item: item,
        collectionCustomKey: collectionCustomKey,
        collectionTitle: topLevelParentCollection.title,
        info: archiveSchema
      });
    } catch (error) {
      console.error(`Error fetching item: ${customKey}`);
      this.setState({
        isError: true
      });
    }
  }

  updateFormState = (name, val) => {
    this.setState({
      [name]: val
    });
  };

  setPage = (page) => {
    this.setState({ page: page });
  };

  isImgURL(url) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }

  isAudioURL(url) {
    return url.match(/\.(mp3|ogg|wav)$/) != null;
  }

  isVideoURL(url) {
    return url.match(/\.(mp4|mov)$/) != null;
  }

  isKalturaURL(url) {
    return url.match(/(video.vt.edu\/media)/) != null;
  }

  isPdfURL(url) {
    return url.match(/\.(pdf)$/) != null;
  }

  isJsonURL(url) {
    return url.match(/\.(json)$/) != null;
  }
  isObjURL(url) {
    return url.match(/\.(obj|OBJ)$/) != null;
  }
  isMtlUrl(url) {
    return url.match(/\.(mtl)$/) != null;
  }
  isX3DUrl(url) {
    return url.match(/\.(x3d|X3D)$/) != null;
  }

  buildArchiveSchema(item) {
    let info = {};
    info["audio"] = item.manifest_url;
    info["collectionTitle"] = this.state.collectionTitle;
    let collectionURL = window.location.href.replace("archive", "collection");
    let collectionNoid = this.state.collectionCustomKey.replace(
      "ark:/53696/",
      ""
    );

    info["collectionURL"] =
      collectionURL.substring(0, collectionURL.length - 8) + collectionNoid;
    info["datePublished"] = item.create_date;
    info["description"] = item.description;
    if (item.manifest_file_characterization) {
      const characterization = JSON.parse(item.manifest_file_characterization);
      info["duration"] = characterization.duration;
    }
    info["title"] = item.title;
    info["url"] = window.location.href;

    return info;
  }

  mediaDisplay(item) {
    let display = null;
    let width = Math.min(
      document.getElementById("content-wrapper").offsetWidth - 50,
      720
    );
    if (this.isJsonURL(item.manifest_url)) {
      display = <MiradorViewer item={item} site={this.props.site} />;
    } else if (this.isImgURL(item.manifest_url)) {
      display = (
        <Thumbnail
          className="item-img"
          item={item}
          imgURL={item.manifest_url}
          altText={item.title}
          site={this.props.site}
        />
      );
    } else if (this.isAudioURL(item.manifest_url)) {
      const transcript = item.archiveOptions
        ? JSON.parse(item.archiveOptions)
        : null;
      display = (
        <MediaElement
          src={item.manifest_url}
          mediaType="audio"
          site={this.props.site}
          poster={item.thumbnail_path}
          title={item.title}
          transcript={transcript ? transcript?.audioTranscript : null}
          isPodcast={this.state.item?.type?.find((item) => item === "podcast")}
        />
      );
    } else if (this.isVideoURL(item.manifest_url)) {
      display = (
        <MediaElement
          src={item.manifest_url}
          mediaType="video"
          site={this.props.site}
          poster={item.thumbnail_path}
        />
      );
    } else if (this.isKalturaURL(item.manifest_url)) {
      display = <KalturaPlayer manifest_url={item.manifest_url} />;
    } else if (this.isPdfURL(item.manifest_url)) {
      display = (
        <canvas id="pdf-canvas">
          <PDFViewer manifest_url={item.manifest_url} title={item.title} />
        </canvas>
      );
    } else if (this.isObjURL(item.manifest_url)) {
      const texPath = item.manifest_url.substring(
        0,
        item.manifest_url.lastIndexOf("/") + 1
      );
      display = (
        <div className="obj-wrapper" style={{ width: `${width}px` }}>
          <OBJModel src={item.manifest_url} texPath={texPath} />
        </div>
      );
    } else if (this.isMtlUrl(item.manifest_url)) {
      display = (
        <div className="obj-wrapper" style={{ width: `${width}px` }}>
          <MtlElement mtl={item.manifest_url} />
        </div>
      );
    } else if (this.isX3DUrl(item.manifest_url)) {
      display = (
        <div className="obj-wrapper" style={{ width: `${width}px` }}>
          <X3DElement url={item.manifest_url} frameSize={width} />
        </div>
      );
    } else {
      display = <></>;
    }
    return display;
  }

  fileExtensionFromFileName(filename) {
    return filename.split(".")[1];
  }

  findResourceType() {
    if (
      this.state.item.type &&
      this.state.item.type.find((item) => item === "podcast")
    ) {
      return "PodcastEpisode";
    } else {
      return "Unknown";
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.getArchive(this.props.customKey);
    }
  }

  componentDidMount() {
    fetchLanguages(this, this.props.site, "abbr");
    this.getArchive(this.props.customKey);
  }

  getHeadings() {
    let headings = JSON.parse(this.props.site.displayedAttributes);
    headings = headings.archive.filter((obj) => obj.field === "description");
    return headings.length > 0 ? headings[0].label : headings;
  }

  render() {
    if (this.state.isError) {
      return <NotFound />;
    }
    if (
      this.state.languages &&
      this.state.item &&
      this.state.collectionCustomKey
    ) {
      // log archive identifier in ga
      ReactGA.send({
        hitType: "pageview",
        page: window.location.href,
        title: this.state.item.identifier
      });
      const archiveOptions = JSON.parse(this.state.item.archiveOptions);
      return (
        <div className="item-page-wrapper">
          <SiteTitle
            siteTitle={this.props.site.siteTitle}
            pageTitle={this.state.item.title}
          />
          <Helmet
            script={[
              { type: "text/javascript" },
              {
                type: "application/ld+json",
                innerHTML: buildRichSchema(
                  this.findResourceType(),
                  this.state.info
                )
              }
            ]}
          ></Helmet>
          <SearchBar
            category={this.state.category}
            view={this.state.view}
            searchField={this.state.searchField}
            setPage={this.setPage}
            updateFormState={this.updateFormState}
          />

          <div className="item-image-section">
            <div className="breadcrumbs-wrapper">
              <nav aria-label="Collection breadcrumbs">
                <Breadcrumbs category={"Archives"} record={this.state.item} />
              </nav>
            </div>
            <div className="row">
              <div
                className="col-sm-12"
                id="item-media-col"
                role="region"
                aria-label="Item media"
              >
                {this.mediaDisplay(this.state.item)}
              </div>
            </div>
          </div>
          <div
            className="row item-details-section"
            role="region"
            aria-label="Item details"
          >
            <div className="col-lg-6 details-section-description">
              {addNewlineInDesc(
                this.state.item?.description,
                this.getHeadings()
              )}
            </div>
            <div className="col-lg-6 details-section-metadata">
              {archiveOptions?.derivatives?.downloads && (
                <DownloadLinks
                  title="Download this file"
                  links={archiveOptions.derivatives.downloads}
                />
              )}
              <SocialButtons
                buttons={JSON.parse(this.props.site.siteOptions)}
                url={window.location.href}
                title={this.state.item.title}
                media={this.state.item.thumbnail_path}
              />
              <Citation item={this.state.item} site={this.props.site} />
              <table aria-label="Item Metadata">
                <tbody>
                  <RenderItemsDetailed
                    keyArray={JSON.parse(this.props.site.displayedAttributes)[
                      "archive"
                    ].filter((e) => e.field !== "description")}
                    item={this.state.item}
                    languages={this.state.languages}
                    collectionCustomKey={this.state.collectionCustomKey}
                    site={this.props.site}
                  />
                </tbody>
              </table>
            </div>
          </div>
          <RelatedItems collection={this.state.item} site={this.props.site} />
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default ArchivePage;
