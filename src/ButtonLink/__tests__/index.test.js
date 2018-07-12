// @flow

import * as React from "react";
import { mount } from "enzyme";

import ButtonLink from "../ButtonLink";
import Airplane from "../../icons/Airplane";
import ChevronDown from "../../icons/ChevronDown";

const children = "ButtonLink";
const href = "https://kiwi.com";

describe("ButtonLink as link", () => {
  const component = mount(
    <ButtonLink href={href} external>
      {children}
    </ButtonLink>,
  );
  const button = component.find("ButtonLink__StyledButtonLink");
  it("should contain a title ", () => {
    expect(button.render().text()).toBe(children);
  });
  it("should contain SVG", () => {
    expect(button.find("svg").exists()).toBe(false);
  });
  it("should be external", () => {
    expect(button.prop("target")).toBe("_blank");
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});

describe("ButtonLink with Icons", () => {
  const component = mount(
    <ButtonLink iconLeft={<Airplane />} iconRight={<ChevronDown />} href={href}>
      {children}
    </ButtonLink>,
  );
  const button = component.find("ButtonLink__StyledButtonLink");
  it("should contain a title ", () => {
    expect(button.render().text()).toBe(children);
  });
  it("should contain icons", () => {
    expect(button.find("svg").exists()).toBe(true);
    expect(button.find("ChevronDown").exists()).toBe(true);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
