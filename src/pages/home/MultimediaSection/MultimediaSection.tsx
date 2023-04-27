import { FC } from "react";
import { cleanHTML } from "../../../lib/MetadataRenderer";
import "../../../css/MultimediaSection.scss";

type Props = {
  mediaSection: {
    link: string | null;
    mediaEmbed: React.ReactHTMLElement<HTMLIFrameElement> | null;
    title: string | null;
    text: string | null;
  };
};

export const MultimediaSection: FC<Props> = ({ mediaSection }) => {
  if (
    !!mediaSection &&
    mediaSection.link &&
    mediaSection.mediaEmbed &&
    mediaSection.title &&
    mediaSection.text
  ) {
    return (
      <div
        className="row media-section-wrapper"
        role="region"
        aria-labelledby="multimedia-region"
      >
        <div className="col-lg-6">
          <div className="multimedia-column">
            {cleanHTML(mediaSection.mediaEmbed, "media")}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="multimedia-text-column">
            <div className="media-section-title-wrapper">
              <h2 id="multimedia-region">{mediaSection.title}</h2>
            </div>
            <div className="media-section-divider"></div>
            <p className="media-section-text">{mediaSection.text}</p>
            <a
              className="media-section-link"
              href={mediaSection.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
