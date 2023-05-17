import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MultimediaSection } from "./MultimediaSection";

describe("Multimendia section component", () => {
  const setup = (mediaSection) => {
    render(<MultimediaSection mediaSection={mediaSection} />);
  };
  it("displays Multimedia Section component", () => {
    const mediaSection = {
      link: "https://lib.vt.edu/",
      mediaEmbed:
        '<iframe title=\'multimedia player\' src="https://www.youtube.com/embed/8fswmAtvCqI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      text: "The University Libraries play an essential role in furthering Virginia Tech’s mission as a global land-grant university by providing a diversity of resources to produce, disseminate, use, share and sustain data and information.",
      title: "Welcome to the University Libraries at Virginia Tech"
    };
    setup(mediaSection);
    expect(screen.getByRole("region")).toBeVisible();
    expect(
      screen.getByRole("link", {
        name: /Learn More/i
      })
    ).toBeVisible();
    expect(screen.getByTitle("multimedia player")).toBeInTheDocument();
    expect(
      screen.getByText(/The University Libraries play an essential role/i)
    ).toBeVisible();
    expect(
      screen.getByRole("heading", {
        name: "Welcome to the University Libraries at Virginia Tech"
      })
    ).toBeVisible();
  });
  it("does not display section is prop is null", () => {
    const mediaSection = null;
    setup(mediaSection);
    expect(screen.queryByRole("region")).not.toBeInTheDocument();
  });
  it("does not display section if a property in the props object is null", () => {
    const mediaSection = {
      link: "https://lib.vt.edu/",
      mediaEmbed:
        '<iframe title=\'multimedia player\' src="https://www.youtube.com/embed/8fswmAtvCqI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      text: "The University Libraries play an essential role in furthering Virginia Tech’s mission as a global land-grant university by providing a diversity of resources to produce, disseminate, use, share and sustain data and information.",
      title: null
    };
    setup(mediaSection);
    expect(screen.queryByRole("region")).not.toBeInTheDocument();
  });
  it("does not display section if a property in the props object is an empty string", () => {
    const mediaSection = {
      link: "https://lib.vt.edu/",
      mediaEmbed:
        '<iframe title=\'multimedia player\' src="https://www.youtube.com/embed/8fswmAtvCqI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      text: "The University Libraries play an essential role in furthering Virginia Tech’s mission as a global land-grant university by providing a diversity of resources to produce, disseminate, use, share and sustain data and information.",
      title: ""
    };
    setup(mediaSection);
    expect(screen.queryByRole("region")).not.toBeInTheDocument();
  });
});
