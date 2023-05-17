import { FC } from "react";
import { useSignedLink } from "../../../hooks/useSignedLink";

type Props = {
  highlight: {
    src: string;
    link: string;
    itemCount: string;
    title: string;
  };
  index: number;
  siteId: string;
};

export const Highlight: FC<Props> = ({ highlight, index, siteId }) => {
  const imgSrc = useSignedLink(highlight.src, "image", siteId);

  if (!imgSrc) {
    return null;
  }
  return (
    <div
      className="col-md-6 col-lg-3"
      role="group"
      aria-roledescription="category card"
    >
      <a href={highlight.link}>
        <div
          className="category-container"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          data-testid={`collectionHighlight_${index}`}
        >
          <div className="category-details">
            <span>{highlight.itemCount}</span>
            <h3>{highlight.title}</h3>
          </div>
          <div className="category-link">
            <p>
              Explore<i className="fal fa-arrow-right"></i>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};
