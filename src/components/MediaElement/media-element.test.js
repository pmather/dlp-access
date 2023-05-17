import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import * as FunctionalFileGetter from "../../lib/FunctionalFileGetter";
import * as fetchTools from "../../lib/fetchTools";
import { MediaElement } from "./MediaElement";
import { MediaPlayer } from "./MediaPlayer";
import userEvent from "@testing-library/user-event";

describe("Media element component", () => {
  const setup = (
    src = "https://vtdlp-lee-test.s3.amazonaws.com/English_Web_Accessibility_Perspectives.mp3",
    imgSource = "http://i3.ytimg.com/vi/iWO5N3n1DXU/hqdefault.jpg",
    transcriptSource = "public/sitecontent/text/default/TestTranscript2.html",
    isPodcast = undefined,
    transcriptContent = "<div><p>Test transcript</p></div>",
    imgLink = "http://i3.ytimg.com/vi/iWO5N3n1DXU/hqdefault.jpg",
    mediaSrc = "https://vtdlp-lee-test.s3.amazonaws.com/English_Web_Accessibility_Perspectives.mp3"
  ) => {
    jest
      .spyOn(fetchTools, "getFileContent")
      .mockResolvedValueOnce(transcriptContent);
    jest.spyOn(FunctionalFileGetter, "getFile").mockResolvedValueOnce(imgLink);
    jest.spyOn(FunctionalFileGetter, "getFile").mockResolvedValue(mediaSrc);
    render(
      <MediaElement
        src={src}
        mediaType="audio"
        site={{ siteId: "default" }}
        poster={imgSource}
        title="Test title"
        transcript={transcriptSource}
        isPodcast={isPodcast}
      />
    );
  };
  it("displays correct layout and elements for audio files", async () => {
    setup();
    const img = await screen.findByRole("img");
    expect(img).toBeVisible();
    expect(img).toHaveAttribute(
      "src",
      "http://i3.ytimg.com/vi/iWO5N3n1DXU/hqdefault.jpg"
    );
    expect(img).toHaveAttribute("alt", "Test title");
    expect(img.closest("div")).toHaveClass("audio-image-wrapper", {
      exact: true
    });
    const transcriptBtn = await screen.findByRole("button", {
      name: "Transcript"
    });
    expect(transcriptBtn).toBeVisible();
    const transcript = screen.getByTestId("mediaElement_transcript");
    expect(transcript).toHaveClass("d-none");
    await userEvent.click(transcriptBtn);
    expect(transcript).toHaveClass("transcript-section");
    expect(
      screen.getByRole("button", { name: "Download transcript" })
    ).toBeVisible();
    expect(screen.getByText("Test transcript")).toBeVisible();
  });

  it("does not display image if poster prop is null", async () => {
    setup(undefined, null);
    const transcriptBtn = await screen.findByRole("button", {
      name: "Transcript"
    });
    expect(transcriptBtn).toBeVisible();
    expect(screen.queryByRole("img")).toBeNull();
  });

  it("does not display image if image file does not exist", async () => {
    setup(undefined, undefined, undefined, undefined, undefined, null);
    const transcriptBtn = await screen.findByRole("button", {
      name: "Transcript"
    });
    expect(transcriptBtn).toBeVisible();
    expect(screen.queryByRole("img")).toBeNull();
  });

  it("does not display transcript button if transcript prop is null", async () => {
    setup(undefined, undefined, null);
    const img = await screen.findByRole("img");
    expect(img).toBeVisible();
    const transcriptBtn = screen.queryByRole("button", {
      name: "Transcript"
    });
    expect(transcriptBtn).toBeNull();
  });

  it("does not display transcript button if transcript file does not exist", async () => {
    setup(undefined, undefined, undefined, undefined, null);
    const img = await screen.findByRole("img");
    expect(img).toBeVisible();
    const transcriptBtn = screen.queryByRole("button", {
      name: "Transcript"
    });
    expect(transcriptBtn).toBeNull();
  });

  it("displays alternate layout if item is a podcast", async () => {
    setup(undefined, undefined, undefined, "podcast");
    const img = await screen.findByRole("img");
    expect(img).toBeVisible();
    expect(img.closest("div")).toHaveClass(
      "audio-image-wrapper col-12 col-sm-4",
      { exact: true }
    );
    expect(document.querySelector(".media-element-container")).toBeVisible();
    expect(document.querySelector(".media-player-wrapper")).toBeVisible();
    expect(document.querySelector(".media-player")).toBeVisible();
  });

  it("displays correct layout and elements for video files", async () => {
    const src =
      "https://collectionmap123850-opendev.s3.us-east-1.amazonaws.com/public/sitecontent/audio/default/English_Web_Accessibility_Perspectives.mp4";
    const imgSrc = "http://i3.ytimg.com/vi/iWO5N3n1DXU/hqdefault.jpg";
    jest.spyOn(FunctionalFileGetter, "getFile").mockResolvedValueOnce(imgSrc);
    jest.spyOn(FunctionalFileGetter, "getFile").mockResolvedValue(src);
    render(
      <MediaElement
        src={src}
        mediaType="video"
        site={{ siteId: "default" }}
        poster={imgSrc}
      />
    );
    const img = await waitFor(() => screen.queryByRole("img"));
    expect(img).toBeNull();
    const transcriptBtn = await waitFor(() =>
      screen.queryByRole("button", { name: "Transcript" })
    );
    expect(transcriptBtn).toBeNull();
    expect(document.querySelector(".media-element-container")).toBeNull();
  });

  it("does not display component if src prop is null", async () => {
    setup(null);
    const transcriptBtn = await waitFor(() =>
      screen.queryByRole("button", { name: "Transcript" })
    );
    expect(transcriptBtn).toBeNull();
  });

  it("does not display component if media file does not exist", async () => {
    setup(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      null
    );
    const transcriptBtn = await waitFor(() =>
      screen.queryByRole("button", { name: "Transcript" })
    );
    expect(transcriptBtn).toBeNull();
  });
});

describe("Media player component", () => {
  const setup = (
    src,
    mediaType,
    audioImg = "http://i3.ytimg.com/vi/iWO5N3n1DXU/hqdefault.jpg",
    captionSrc = src
  ) => {
    jest.spyOn(FunctionalFileGetter, "getFile").mockResolvedValue(captionSrc);
    render(
      <MediaPlayer
        mediaSrc={src}
        filename={src.split("/").pop()}
        id="player1"
        width="100%"
        height="640"
        preload="none"
        mediaType={mediaType}
        site={{ siteId: "default" }}
        poster={audioImg}
      />
    );
  };

  it("Displays correct player for audio files", async () => {
    const audioSrc =
      "https://vtdlp-lee-test.s3.amazonaws.com/English_Web_Accessibility_Perspectives.mp3";
    setup(audioSrc, "audio");
    const audioPlyr = await screen.findByTestId("audio1");
    expect(audioPlyr).toBeVisible();
    expect(audioPlyr).toHaveAttribute("id", "player1");
    expect(audioPlyr).toHaveAttribute("preload", "none");
    expect(audioPlyr).toHaveAttribute("controls");
    expect(audioPlyr).toHaveStyle("width: 100%");
    const source = audioPlyr.firstChild;
    expect(source).toBeInTheDocument();
    expect(source).toHaveAttribute("src", audioSrc);
    expect(source).toHaveAttribute("type", "audio/mp3");
  });

  it("Displays correct player for video files", async () => {
    const videoSrc =
      "https://collectionmap123850-opendev.s3.us-east-1.amazonaws.com/public/sitecontent/audio/default/English_Web_Accessibility_Perspectives.mp4";
    setup(videoSrc, "video");
    const track = await screen.findByTestId("track1");
    expect(track).toBeInTheDocument();
    expect(track).toHaveAttribute("src", videoSrc);
    expect(track).toHaveAttribute("kind", "subtitles");
    expect(track).toHaveAttribute("label", "English");
    expect(track).toHaveAttribute("srclang", "en");
    const videoPlyr = screen.getByTestId("video1");
    expect(videoPlyr).toBeVisible();
    expect(videoPlyr).toHaveAttribute("id", "player1");
    expect(videoPlyr).toHaveAttribute("width", "100%");
    expect(videoPlyr).toHaveAttribute("height", "640");
    expect(videoPlyr).toHaveAttribute(
      "poster",
      "http://i3.ytimg.com/vi/iWO5N3n1DXU/hqdefault.jpg"
    );
    expect(videoPlyr).toHaveAttribute("controls");
    expect(videoPlyr).toHaveAttribute("preload", "none");
    const source = videoPlyr.firstChild;
    expect(source).toBeInTheDocument();
    expect(source).toHaveAttribute("src", videoSrc);
    expect(source).toHaveAttribute("type", "video/mp4");
  });

  it("Does not display track tag if caption file does not exist", async () => {
    const videoSource =
      "https://collectionmap123850-opendev.s3.us-east-1.amazonaws.com/public/sitecontent/audio/default/English_Web_Accessibility_Perspectives.mp4";
    setup(videoSource, "video", undefined, null);
    const track = screen.queryByTestId("track1");
    expect(track).toBeNull();
    const videoPlyr = screen.getByTestId("video1");
    expect(videoPlyr).toBeVisible();
    const source = videoPlyr.firstChild;
    expect(source).toBeInTheDocument();
  });
});
