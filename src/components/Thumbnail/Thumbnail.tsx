import { FC } from "react";
import "../../css/Thumbnail.scss";
import { useSignedLink } from "../../hooks/useSignedLink";

type Props = {
  imgURL: string;
  item: {
    thumbnail_path: string;
    title: string;
  };
  site: {
    siteId: string;
  };
  label: boolean;
  category: string;
  className: string;
  altText: boolean;
};

export const Thumbnail: FC<Props> = ({
  imgURL,
  item,
  site,
  label,
  category,
  className,
  altText
}) => {
  const image = useSignedLink(
    imgURL || item.thumbnail_path,
    "image",
    site?.siteId
  );
  if (!image) {
    return null;
  }
  return (
    <div className="image-container">
      {label && (
        <div className={`${category}-label`}>
          <p>{category === "collection" ? "Collection" : "Item"}</p>
        </div>
      )}
      <img className={className} src={image} alt={altText ? item.title : ""} />
    </div>
  );
};
