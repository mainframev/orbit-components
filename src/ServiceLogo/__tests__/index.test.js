// @flow
import * as React from "react";
import { shallow } from "enzyme";

import { NAME_OPTIONS, SIZE_OPTIONS, baseURL } from "../consts";
import ServiceLogo from "../ServiceLogo";

const name = NAME_OPTIONS.AIRHELP;
const size = SIZE_OPTIONS.LARGE;

describe(`ServiceLogo: ${name}`, () => {
  const component = shallow(<ServiceLogo name={name} size={size} />);

  it("should have props", () => {
    expect(component.prop("src")).toBe(`${baseURL}/${name}.png`);
    expect(component.prop("size")).toBe(size);
    expect(component.prop("alt")).toBe(name);
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
