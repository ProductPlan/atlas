import React from "react";
import { render, screen } from "@testing-library/react";
import BasicButton, { buttonVariants } from "@components/BasicButton";

const icon = <i className="fa fa-chevron-left"></i>;

describe("BasicButton", () => {
  it("handles the click onClick handler", () => {
    const onClick = jest.fn();
    render(
      <BasicButton
        label="Click Me"
        onClick={onClick}
        htmlId="buttonWithClickHandler"
      />
    );

    screen.getByText("Click Me").click();
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
          htmlForm="formId"
          htmlType={type}
          htmlId="buttonWithClickHandler"
        />
      );

      const buttonElement = screen.getByText(label);
      expect(buttonElement.getAttribute("form")).toBe("formId");
      expect(buttonElement.getAttribute("type")).toBe(type);
    });
  });

  it("renders a different htmlType if provided", () => {
    render(
      <BasicButton label="Click Me" htmlType="submit" htmlId="buttonWithForm" />
    );

    expect(screen.getByText("Click Me").getAttribute("type")).toBe("submit");
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
