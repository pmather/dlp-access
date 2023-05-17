import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { API, graphqlOperation } from "aws-amplify";
import { searchCollections } from "../../graphql/queries";
import SiteTitle from "../../components/SiteTitle";
import CollectionMetadataSection from "../../components/CollectionMetadataSection";
import CollectionItemsLoader from "./CollectionItemsLoader";
import CollectionsListView from "./CollectionsListView";
import Breadcrumbs from "../../components/Breadcrumbs";
import CollectionTopContent from "../../components/CollectionTopContent";
import { buildRichSchema } from "../../lib/richSchemaTools";
import { addNewlineInDesc } from "../../lib/MetadataRenderer";
import {
  fetchLanguages,
  getTopLevelParentForCollection
} from "../../lib/fetchTools";
import SocialButtons from "../../components/SocialButtons";

import "../../css/CollectionsShowPage.scss";
import { NotFound } from "../NotFound";

const TRUNCATION_LENGTH = 600;

class CollectionsShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: null,
      collectionCustomKey: "",
      languages: null,
      descriptionTruncated: true,
      description: [],
      title: "",
      thumbnail_path: "",
      creator: "",
      updatedAt: "",
      info: {},
      titleList: [],
      isError: false
    };
    this.onMoreLessClick = this.onMoreLessClick.bind(this);
  }

  async getCollection(customKey) {
    const options = {
      order: "ASC",
      limit: 1,
      filter: {
        collection_category: {
          eq: process.env.REACT_APP_REP_TYPE.toLowerCase()
        },
        visibility: { eq: true },
        custom_key: {
          matchPhrase: customKey
        }
      }
    };
    const response = await API.graphql(
      graphqlOperation(searchCollections, options)
    );
    try {
      const collection = response.data.searchCollections.items[0];
      const topLevelParentCollection = await getTopLevelParentForCollection(
        collection
      );
      const collectionCustomKey = topLevelParentCollection.custom_key;
      const collectionSchema = this.buildCollectionSchema(collection);

      this.setState(
        { collection: collection, collectionCustomKey: collectionCustomKey },
        function () {
          const topLevelAttributes = [
            "title",
            "description",
            "thumbnail_path",
            "creator",
            "updatedAt"
          ];
          this.setTopLevelAttributes(topLevelAttributes);
        }
      );

      this.setState({
        info: collectionSchema
      });
    } catch (error) {
      console.error(`Error fetching collection: ${customKey}`);
      this.setState({
        isError: true
      });
    }
  }

  buildCollectionSchema(item) {
    let info = {};
    info["creator"] = item.creator;
    info["description"] = item.description;
    info["thumbnail_path"] = item.thumbnail_path;
    info["title"] = item.title;
    info["url"] = window.location.href;
    if (item.collectionOptions) {
      const collectionOptions = JSON.parse(item.collectionOptions);
      info["webFeed"] = collectionOptions.webfeed;
    }

    return info;
  }

  getHeadings() {
    let headings = JSON.parse(this.props.site.displayedAttributes);
    headings = headings.collection.filter((obj) => obj.field === "description");
    return headings.length > 0 ? headings[0].label : headings;
  }

  handleZeroItems(collection) {
    let numberStatement = "";
    if (collection > 0) {
      numberStatement = collection + " items";
    }
    return numberStatement;
  }

  updateSubCollections(component, collection, subCollections) {
    collection.subCollection_total =
      subCollections != null ? subCollections.length : 0;
    component.setCollectionState(collection);
  }

  updateCollectionArchives(component, collection, items) {
    collection.archives = items.total;
    component.setCollectionState(collection);
  }

  setCollectionState(collection) {
    this.setState({
      collection: collection
    });
  }

  async setTopLevelAttributes(attributes) {
    let attributeResults = {};
    attributeResults = await this.getTopLevelAttributes(
      this.state.collection,
      attributes
    );
    this.setState(attributeResults, function () {
      this.render();
    });
  }

  async getTopLevelAttributes(collection, attributes) {
    let attributeResults = {};
    let parentData = await getTopLevelParentForCollection(collection);
    for (const key of attributes) {
      attributeResults[key] = parentData[key];
    }
    return attributeResults;
  }

  subCollectionTitle() {
    let title = "";
    if (this.state.title && this.state.title !== this.state.collection.title) {
      title = this.state.collection.title;
    }
    return title;
  }

  subCollectionDescription() {
    let descriptionSection = <></>;
    let descriptionText = this.state.collection.description;
    let visibleText = null;
    if (descriptionText?.length && this.state.subDescriptionTruncated) {
      visibleText = [];
      visibleText.push(descriptionText[0].substring(0, TRUNCATION_LENGTH));
    }

    if (this.state.collection.parent_collection && descriptionText?.length) {
      descriptionSection = (
        <div className="collection-detail-description">
          <div
            className={`collection-detail-value description ${
              this.state.subDescriptionTruncated ? "trunc" : "full"
            }`}
          >
            {addNewlineInDesc(
              visibleText || descriptionText,
              this.getHeadings()
            )}
            {this.moreLessButtons(descriptionText, "metadata")}
          </div>
        </div>
      );
    }
    return descriptionSection;
  }

  moreLessButtons(text, section) {
    let moreLess = <></>;
    if ((text[0] && text[0].length >= TRUNCATION_LENGTH) || text.length > 1) {
      moreLess = (
        <span>
          <button
            onClick={(e) => this.onMoreLessClick(section, e)}
            className="more"
            type="button"
            aria-controls="collection-description"
            aria-expanded="false"
          >
            . . .[more]
          </button>
          <button
            onClick={(e) => this.onMoreLessClick(section, e)}
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

  onMoreLessClick(section, e) {
    e.preventDefault();
    let key = "descriptionTruncated";
    if (section === "metadata") {
      key = "subDescriptionTruncated";
    }
    let truncated = true;
    if (this.state[key]) {
      truncated = false;
    }
    let stateObj = {};
    stateObj[key] = truncated;
    this.setState(stateObj, function () {
      this.render();
    });
  }

  setTitleList(titleList) {
    this.setState({ titleList: titleList });
  }

  metadataTitle() {
    let title = "";
    if (this.state.titleList.length) {
      title +=
        "Collection Details for " +
        this.state.titleList.map((elem) => elem.title).join(", ");
    }
    return title;
  }

  collectionMainContent() {
    const items = (
      <CollectionItemsLoader
        key="collection-items-section"
        parent={this}
        collection={this.state.collection}
        updateCollectionArchives={this.updateCollectionArchives.bind(this)}
        sectionSize="no-size"
        site={this.props.site}
      />
    );
    const metadata = (
      <div className="mid-content-row row" key="collection-metadata-row">
        <CollectionMetadataSection
          key="collection-metadata-section"
          site={this.props.site}
          languages={this.state.languages}
          collection={this.state.collection}
          metadataTitle={this.metadataTitle()}
          subCollectionDescription={this.subCollectionDescription()}
          collectionCustomKey={this.state.collectionCustomKey}
          sectionsSizes={["col-12 col-lg-8", "col-12 col-lg-4"]}
          headings={this.getHeadings()}
        />
      </div>
    );

    const blocks = [];
    const options = JSON.parse(this.props.site.siteOptions);
    if (options && options.collectionPageSettings) {
      if (parseInt(options.collectionPageSettings.itemsPosition) === 0) {
        blocks.push(items);
        blocks.push(metadata);
      } else {
        blocks.push(metadata);
        blocks.push(items);
      }
    } else {
      blocks.push(metadata);
      blocks.push(items);
    }
    return <div>{blocks}</div>;
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.getCollection(this.props.customKey);
    }
  }

  componentDidMount() {
    fetchLanguages(this, this.props.site, "abbr");
    this.getCollection(this.props.customKey);
  }

  findCollectionType() {
    if (this.props.site.siteId === "podcasts") {
      return "PodcastSeries";
    } else {
      return "Unknown";
    }
  }

  render() {
    if (this.state.isError) {
      return <NotFound />;
    }
    const options = JSON.parse(this.props.site.siteOptions);
    const viewOption = options.collectionPageSettings
      ? options.collectionPageSettings.viewOption
      : null;
    if (this.state.languages && this.state.collection) {
      return (
        <div>
          <SiteTitle
            siteTitle={this.props.site.siteTitle}
            pageTitle={this.state.collection.title}
          />
          <Helmet
            script={[
              { type: "text/javascript" },
              {
                type: "application/ld+json",
                innerHTML: buildRichSchema(
                  this.findCollectionType(),
                  this.state.info
                )
              }
            ]}
          ></Helmet>
          <div className="breadcrumbs-wrapper">
            <nav aria-label="Collection breadcrumbs">
              <Breadcrumbs
                category="Collections"
                record={this.state.collection}
                setTitleList={this.setTitleList.bind(this)}
              />
            </nav>
          </div>
          <CollectionTopContent
            collectionImg={this.state.thumbnail_path}
            collectionTitle={this.state.title}
            updatedAt={this.state.updatedAt}
            description={this.state.description}
            TRUNCATION_LENGTH={TRUNCATION_LENGTH}
            creator={this.state.creator}
            customKey={this.props.customKey}
            collectionOptions={JSON.parse(
              this.state.collection.collectionOptions
            )}
            site={this.props.site}
            headings={this.getHeadings()}
          />
          {viewOption === "list" ? (
            <CollectionsListView
              site={this.props.site}
              languages={this.state.languages}
              collection={this.state.collection}
              metadataTitle={this.metadataTitle()}
              subCollectionDescription={this.subCollectionDescription()}
              collectionCustomKey={this.state.collectionCustomKey}
              parent={this}
              updateCollectionArchives={this.updateCollectionArchives.bind(
                this
              )}
              viewOption={viewOption}
              title={this.state.title}
              media={this.state.thumbnail_path}
            />
          ) : (
            <>
              <div className="row justify-content-end">
                <div className="social-buttons-wrapper-line col-12 col-md-8">
                  <SocialButtons
                    buttons={JSON.parse(this.props.site.siteOptions)}
                    url={window.location.href}
                    title={this.state.collectionTitle}
                    media={this.state.thumbnail_path}
                  />
                </div>
              </div>
              {this.collectionMainContent()}
            </>
          )}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default CollectionsShowPage;
