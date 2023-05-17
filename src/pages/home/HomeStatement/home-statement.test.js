import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HomeStatement } from "./HomeStatement";

describe("Home statement component", () => {
  const setup = (homeStatement) => {
    render(<HomeStatement homeStatement={homeStatement} />);
  };
  it("displays Home Statement component", () => {
    const homeStatement = {
      heading: "Welcome",
      statement: "A test statement and <a href='https://lib.vt.edu'>link</a>."
    };
    setup(homeStatement);
    expect(screen.getByRole("region")).toBeVisible();
    expect(screen.getByRole("heading", { level: 2 })).toBeVisible();
    expect(screen.getByText(/A test statement/i)).toBeVisible();
    expect(screen.getByRole("link")).toBeVisible();
  });

  it("does not display Home Statement component if prop is null", () => {
    const homeStatement = null;
    setup(homeStatement);
    expect(screen.queryByRole("region")).toBeNull();
  });

  it("does not display heading if value is null", () => {
    const homeStatement = {
      heading: null,
      statement: "A test statement and <a href='https://lib.vt.edu'>link</a>."
    };
    setup(homeStatement);
    expect(screen.queryByRole("heading", { level: 2 })).toBeNull();
    expect(screen.getByText(/A test statement/i)).toBeVisible();
    expect(screen.getByRole("link")).toBeVisible();
  });

  it("does not display heading if value is an empty string", () => {
    const homeStatement = {
      heading: "",
      statement: "A test statement and <a href='https://lib.vt.edu'>link</a>."
    };
    setup(homeStatement);
    expect(screen.queryByRole("heading", { level: 2 })).toBeNull();
    expect(screen.getByText(/A test statement/i)).toBeVisible();
    expect(screen.getByRole("link")).toBeVisible();
  });

  it("does not display statement if value is null", () => {
    const homeStatement = {
      heading: "Welcome",
      statement: null
    };
    setup(homeStatement);
    expect(screen.getByRole("heading", { level: 2 })).toBeVisible();
    expect(screen.queryByText(/A test statement/i)).toBeNull();
    expect(screen.queryByRole("link")).toBeNull();
  });

  it("does not display statement if value is empty string", () => {
    const homeStatement = {
      heading: "Welcome",
      statement: ""
    };
    setup(homeStatement);
    expect(screen.getByRole("heading", { level: 2 })).toBeVisible();
    expect(screen.queryByText(/A test statement/i)).toBeNull();
    expect(screen.queryByRole("link")).toBeNull();
  });
});
