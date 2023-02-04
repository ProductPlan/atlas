import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AtlasPopover from "@components/AtlasPopover";

describe("AtlasPopover", () => {
  it("renders", () => {
    function Wrapper() {
      const [refElement, setRefElement] = useState(null);
      return (
        <>
          <div style={{ height: "10px", width: "100px" }} ref={setRefElement} />
          <AtlasPopover
            title="Popover with defaults"
            description="Hello World"
            open={true}
            referenceElement={refElement}
          />
        </>
      );
    }
    const { container } = render(<Wrapper />);
    const content = screen.getByText("Hello World");
    expect(container).toMatchSnapshot();
    expect(content).toBeTruthy();
  });

  it("renders a read more action", () => {
    const handleClick = jest.fn();

    function Wrapper() {
      const [refElement, setRefElement] = useState(null);
      return (
        <>
          <div style={{ height: "10px", width: "100px" }} ref={setRefElement} />
          <AtlasPopover
            title="Popover with read more"
            description="Hello World"
            open={true}
            referenceElement={refElement}
            onReadMoreClick={handleClick}
          />
        </>
      );
    }
    const { container } = render(<Wrapper />);
    expect(container).toMatchSnapshot();

    const readMore = screen.getByText("Read more");
    expect(readMore).toBeTruthy();
    fireEvent.click(readMore);
    expect(handleClick).toHaveBeenCalled();
  });

  it("does not render children with type simple", () => {
    const handleClick = jest.fn();

    function Wrapper() {
      const [refElement, setRefElement] = useState(null);
      return (
        <>
          <div style={{ height: "10px", width: "100px" }} ref={setRefElement} />
          <AtlasPopover
            title="Popover simple"
            description="This is a description"
            open={true}
            referenceElement={refElement}
            onReadMoreClick={handleClick}
            simple={true}
          >
            <p>This text should not render</p>
          </AtlasPopover>
        </>
      );
    }
    const { container } = render(<Wrapper />);
    expect(container).toMatchSnapshot();

    expect(screen.getByText("Read more")).toBeTruthy();
    expect(screen.getByText("This is a description")).toBeTruthy();

    expect(screen.queryByText("This text should not render")).toBeNull();
    // give it a title and confirm there isnt a title
  });

  it("is not visible when open is false", () => {
    function Wrapper() {
      const [refElement, setRefElement] = useState(null);
      return (
        <>
          <div style={{ height: "10px", width: "100px" }} ref={setRefElement} />
          <AtlasPopover
            title="Popover with defaults"
            description="Hello World"
            open={false}
            referenceElement={refElement}
          />
        </>
      );
    }
    const { container } = render(<Wrapper />);
    expect(container).toMatchSnapshot();
    expect(screen.queryByText("Hello World")).toBeNull();
  });
});
