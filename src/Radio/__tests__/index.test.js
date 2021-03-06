// @flow

import * as React from "react";
import { shallow } from "enzyme";

import Radio from "../Radio";

const label = "Radio";
const onChange = jest.fn();
const value = "option";

describe(`Default CheckBox`, () => {
  const component = shallow(<Radio label={label} onChange={onChange} value={value} />);
  it("should contain a label", () => {
    expect(
      component
        .find("Radio__LabelText")
        .render()
        .text(),
    ).toBe(label);
  });
  it("input value should match", () => {
    expect(component.find("Radio__Input").prop("value")).toBe(value);
  });
  it("should execute onChange method", () => {
    component.find("Radio__Input").simulate("change");
    expect(onChange).toHaveBeenCalled();
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
