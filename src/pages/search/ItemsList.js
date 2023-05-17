import React, { Component } from "react";
import ItemListView from "./ItemListView";
import GalleryView from "./GalleryView";
import { getCategory } from "../../lib/MetadataRenderer";
import MasonryView from "./MasonryView";

class ItemsList extends Component {
  getClassName() {
    if (this.props.view === "Masonry") {
      return "card-columns";
    } else {
      return "row justify-content-center";
    }
  }

  render() {
    return (
      <div
        className="search-results-section"
        id="search-results"
        role="region"
        aria-label="Search results"
      >
        <div className={this.getClassName()}>
          {this.props.items.map(item => {
            if (this.props.view === "Gallery") {
              return (
                <GalleryView
                  key={item.id}
                  item={item}
                  category={getCategory(item)}
                  label={true}
                  site={this.props.site}
                />
              );
            } else if (this.props.view === "Masonry") {
              return (
                <MasonryView
                  key={item.id}
                  item={item}
                  category={getCategory(item)}
                  label={true}
                  site={this.props.site}
                />
              );
            } else {
              return (
                <ItemListView
                  key={item.id}
                  item={item}
                  category={getCategory(item)}
                  label={true}
                  site={this.props.site}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default ItemsList;
