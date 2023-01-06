import React from "react";
import { render, waitFor } from "@testing-library/react";
import { screen } from "shadow-dom-testing-library";
import BasicButton, {
  buttonVariants,
  buttonSizes,
  buttonAlignments,
} from "@components/BasicButton";

const icon = <i className="fa fa-chevron-left"></i>;

describe("BasicButton", () => {
  it("handles the click onClick handler", async () => {
    const onClick = jest.fn();
    const { container } = render(
      <BasicButton
        label="Click Me"
        onClick={onClick}
        htmlId="buttonWithClickHandler"
      />
    );

    await waitFor(() => {
      screen.findByShadowLabelText("Click Me");
    });

    screen.getByShadowText("Click Me").click();
    expect(container).toMatchSnapshot();
    expect(onClick).toBeCalled();
    expect(onClick).toBeCalledTimes(1);
  });

  it("renders the htmlForm property", () => {
    const htmlTypes = ["button", "submit", "reset"];

    htmlTypes.forEach((type) => {
      const label = `Click Me - ${type}`;
      render(
        <BasicButton
          label={label}
          htmlType={type}
          htmlId="buttonWithClickHandler"
        />
      );

      const buttonElement = screen.getByShadowText(label);
      expect(buttonElement.getAttribute("type")).toBe(type);
    });
  });

  it("renders a different htmlType if provided", () => {
    render(
      <BasicButton label="Click Me" htmlType="submit" htmlId="buttonWithForm" />
    );

    expect(screen.getByShadowText("Click Me").getAttribute("type")).toBe(
      "submit"
    );
  });

  describe("when using different variants", () => {
    buttonVariants.forEach((type) => {
      it(`renders a ${type} button`, () => {
        const { container } = render(
          <BasicButton label="Click Me" type={type} htmlId={`button-${type}`} />
        );
        expect(container).toMatchSnapshot();
      });
    });
  });

  describe("when using different sizes", () => {
    buttonSizes.forEach((size) => {
      it(`renders a ${size} button`, () => {
        const { container } = render(
          <BasicButton label="Click Me" size={size} htmlId={`button-${size}`} />
        );
        expect(container).toMatchSnapshot();
      });
    });
  });

  describe("when using different text alignments", () => {
    buttonAlignments.forEach((textAlign) => {
      it(`renders a ${textAlign} button`, () => {
        const { container } = render(
          <BasicButton
            label="Click Me"
            align={textAlign}
            htmlId={`button-${textAlign}`}
            size={buttonSizes['full-width']}
          />
        );
        expect(container).toMatchSnapshot();
      });
    });
  });

  describe("when using icons", () => {
    buttonVariants.forEach((type) => {
      describe(`when button with type ${type} has a leading icon`, () => {
        it("renders the icon", () => {
          const { container } = render(
            <BasicButton
              label="Click Me"
              type={type}
              htmlId={`button-${type}`}
              leadingIcon={icon}
            />
          );
          expect(container).toMatchSnapshot();
        });
      });

      describe(`when button with type ${type} has a trailing icon`, () => {
        it("renders the icon", () => {
          const { container } = render(
            <BasicButton
              label="Click Me"
              type={type}
              htmlId={`button-${type}`}
              trailingIcon={icon}
            />
          );
          expect(container).toMatchSnapshot();
        });
      });
    });
  });
});
