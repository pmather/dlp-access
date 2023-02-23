import React, { Component } from "react";
import flvjs from "flv.js";
import hlsjs from "hls.js";
import "mediaelement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "mediaelement/build/mediaelementplayer.min.css";
import "mediaelement/build/mediaelement-flash-video.swf";
import FileGetter from "../lib/FileGetter";
import { cleanHTML } from "../lib/MetadataRenderer";
import { downloadFile, getFileContent } from "../lib/fetchTools";

export default class MediaElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null,
      audioImg: null,
      audioSrc: null,
      captionSrc: null,
      transcript: null,
      isTranscriptActive: false,
      copy: null
    };
    this.fileGetter = new FileGetter();
  }

  success(media, node, instance) {
    console.log(instance);
  }

  error(media) {
    console.log(media);
  }

  async getAssetFiles() {
    const fileGetter = new FileGetter();
    const sources = JSON.parse(this.props.sources);
    let audioResponse = null;
    if (sources[0].src) {
      const audioUrl = sources[0].src;
      const audioFilename = audioUrl.split("/").pop();
      audioResponse = await this.fileGetter.getFile(
        audioFilename,
        "audio",
        this,
        "audioSrc",
        this.props.site.siteId,
        "public/sitecontent"
      );
    }
    if (!!audioResponse.length) {
      const tracks = JSON.parse(this.props.tracks);
      const captionSrc = tracks[0].src;
      await this.fileGetter.getFile(
        captionSrc,
        "audio",
        this,
        "captionSrc",
        this.props.site.siteId,
        "public/sitecontent"
      );
    }
    if (!!audioResponse && this.props.poster) {
      await fileGetter.getFile(
        this.props.poster,
        "image",
        this,
        "audioImg",
        this.props.site.siteId
      );
    }
    if (this.props.transcript) {
      getFileContent(this.props.transcript, "html", this);
    }

    return !!audioResponse;
  }

  async loadAssets() {
    const assetResponse = await this.getAssetFiles();
    if (assetResponse) {
      const { MediaElementPlayer } = global;
      if (!MediaElementPlayer) {
        return;
      }

      const options = Object.assign({}, JSON.parse(this.props.options), {
        pluginPath: "./static/media/",
        success: (media, node, instance) => this.success(media, node, instance),
        error: (media, node) => this.error(media, node)
      });

      window.flvjs = flvjs;
      window.Hls = hlsjs;
      this.setState({ player: new MediaElementPlayer(this.props.id, options) });
    }
  }

  deletePlayer() {
    if (this.state.player && this.state.player.media) {
      try {
        this.state.player.remove();
      } catch (error) {
        console.log(error);
      }
      this.setState({ player: null });
    }
  }

  componentDidMount() {
    this.deletePlayer();
    this.loadAssets();
  }

  componentDidUpdate(prevProps) {
    if (this.props.sources !== prevProps.sources) {
      this.deletePlayer();
      this.loadAssets();
    }
  }

  componentWillUnmount() {
    this.deletePlayer();
  }

  audioImg() {
    return (
      <div className="audio-img-wrapper">
        <img
          className="audio-img"
          src={this.state.audioImg}
          alt={this.props.title}
        />
      </div>
    );
  }

  openTranscript = () => {
    this.setState(prevState => {
      return {
        isTranscriptActive: !prevState.isTranscriptActive
      };
    });
  };

  transcriptButton() {
    if (this.props.transcript) {
      return (
        <button
          type="button"
          className="transcript-button"
          aria-label="Transcript"
          onClick={this.openTranscript}
          title="View transcript"
        >
          <span className="fa-layers fa-fw fa-3x">
            <FontAwesomeIcon icon="circle" color="var(--themeHighlightColor)" />
            <FontAwesomeIcon icon="file" inverse transform="shrink-7" />
          </span>
        </button>
      );
    }
  }

  render() {
    if (!this.state.audioSrc || !this.state.audioImg) {
      return <></>;
    }
    const props = this.props,
      tracks = JSON.parse(props.tracks),
      sourceTags = [],
      tracksTags = [];
    const sources = JSON.parse(this.props.sources);
    sourceTags.push(
      `<source src="${this.state.audioSrc}" type="${sources[0].type}">`
    );

    for (let i = 0, total = tracks.length; i < total; i++) {
      const track = tracks[i];
      tracksTags.push(
        `<track src="${this.state.captionSrc}" kind="${track.kind}" srclang="${
          track.lang
        }"${track.label ? ` label=${track.label}` : ""}>`
      );
    }

    const mediaBody = `${sourceTags.join("\n")}
        ${tracksTags.join("\n")}`,
      mediaHtml =
        props.mediaType === "video"
          ? `<video id="${props.id}" width="${props.width}" height="${
              props.height
            }"${props.poster ? ` poster=${props.poster}` : ""}
          ${props.controls ? " controls" : ""}${
              props.preload ? ` preload="${props.preload}"` : ""
            }>
          ${mediaBody}
        </video>`
          : `<audio id="${props.id}" width="${props.width}" controls>
            ${mediaBody}
          </audio>`;
    return (
      <div>
        {props.mediaType === "audio" && this.audioImg()}
        <div dangerouslySetInnerHTML={{ __html: mediaHtml }}></div>
        <div className="media-buttons">
          {this.transcriptButton()}
          <a
            href={this.state.audioSrc}
            className="download-link"
            download
            aria-label="Download episode"
            title="Download episode"
          >
            <span className="fa-layers fa-fw fa-3x">
              <FontAwesomeIcon
                icon="circle"
                color="var(--themeHighlightColor)"
              />
              <FontAwesomeIcon icon="download" inverse transform="shrink-7" />
            </span>
          </a>
        </div>
        <div
          className="d-flex"
          style={{ marginLeft: "-30px", marginRight: "-30px" }}
        >
          <div
            className={
              this.state.isTranscriptActive ? "transcript-section" : "d-none"
            }
          >
            {this.state.copy ? (
              <>
                <div id="transcript1">
                  {cleanHTML(this.state.copy, "transcript")}
                </div>
                <button
                  className="download-link"
                  title="Download transcript"
                  aria-label="Download transcript"
                  onClick={() =>
                    downloadFile(
                      this.props.transcript,
                      "text",
                      this,
                      "transcript",
                      this.props.site.siteId,
                      "public/sitecontent"
                    )
                  }
                >
                  Download Transcript
                </button>
              </>
            ) : (
              <p>Loading transcript...</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}
