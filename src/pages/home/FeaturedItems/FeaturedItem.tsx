import { FC } from "react";
import { useSignedLink } from "../../../hooks/useSignedLink";

type Props = {
  item: {
    altText: string;
    cardTitle: string;
    link: string;
    src: string;
  };
  position: number;
  length: number;
  site: {
    siteId: string;
  };
  style: React.CSSProperties;
};

export const FeaturedItem: FC<Props> = ({
  item,
  position,
  length,
  site,
  style,
}) => {
  const imgSrc = useSignedLink(item.src, "image", site.siteId);

  if (!imgSrc) {
    return null;
  }
  return (
    <div
      className="col-md-6 col-lg-3"
      role="group"
      aria-roledescription="slide"
      aria-label={`${position} of ${length}`}
      style={style}
    >
      <a href={item.link}>
        <div className="card">
          <img className="card-img-top" src={imgSrc} alt={item.altText || ""} />
          <div className="card-body">
            <h3 className="card-title crop-text-4">{item.cardTitle}</h3>
          </div>
        </div>
      </a>
    </div>
  );
};
