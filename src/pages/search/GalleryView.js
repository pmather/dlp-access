import React from "react";
import { NavLink } from "react-router-dom";
import { arkLinkFormatted } from "../../lib/MetadataRenderer";
import { Thumbnail } from "../../components/Thumbnail";
import { cleanHTML } from "../../lib/MetadataRenderer";
import "../../css/SearchResult.scss";

const GalleryView = props => {
  return (
    <div className="col-md-6 col-lg-4 gallery-item">
      <div className="card">
        <NavLink
          to={`/${props.category}/${arkLinkFormatted(props.item.custom_key)}`}
        >
          <Thumbnail
            item={props.item}
            category={props.category}
            className="card-img-top"
            label={props.label}
            site={props.site}
          />
        </NavLink>
        <div className="card-body">
          <NavLink
            to={`/${props.category}/${arkLinkFormatted(props.item.custom_key)}`}
          >
            <h3 className="card-title crop-text-3">{props.item.title}</h3>
          </NavLink>
          <p className="card-text crop-text-3">
            {cleanHTML(
              props.item?.description?.length ? props.item.description[0] : "",
              "html"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryView;
