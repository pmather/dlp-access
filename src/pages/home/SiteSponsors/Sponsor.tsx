import { FC } from "react";
import { useSignedLink } from "../../../hooks/useSignedLink";

type Props = {
  sponsor: {
    src: string;
    link: string;
    alt: string;
  };
  siteId: string;
};

export const Sponsor: FC<Props> = ({ sponsor, siteId }) => {
  const imgSrc = useSignedLink(sponsor.src, "image", siteId);

  if (!imgSrc) {
    return null;
  }
  return (
    <div className="col-6 col-md-4 col-lg-3 sponsor-wrapper">
      <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={sponsor.alt} className="img-fluid" />
      </a>
    </div>
  );
};
