import React from "react";
import { arkLinkFormatted } from "../../lib/MetadataRenderer";
import Thumbnail from "../../components/Thumbnail";
import "../../css/SearchResult.scss";

const MasonryView = props => {
  return (
    <div className="masonry">
      <div className="card border-0">
        <a
          href={`/${props.category}/${arkLinkFormatted(props.item.custom_key)}`}
        >
          <Thumbnail
            item={props.item}
            category={props.category}
            label={props.label}
            className="card-img"
            altText="true"
          />
        </a>
      </div>
    </div>
  );
};

export default MasonryView;
