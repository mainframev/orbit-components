// @flow

import * as React from "react";
import { shallow } from "enzyme";

import Button from "../../Button/Button";
import ButtonGroup from "../ButtonGroup";
import Airplane from "../../icons/Airplane";

const children = "button";

describe("ButtonGroup", () => {
  const component = shallow(
    <ButtonGroup>
      <Button type="secondary">{children}</Button>
      <Button icon={<Airplane />}>{children}</Button>
    </ButtonGroup>,
  );
  it("first child should match snapshot", () => {
    expect(component.find("Button").first()).toMatchSnapshot();
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
