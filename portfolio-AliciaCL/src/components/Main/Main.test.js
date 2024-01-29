import React from "react";
import { shallow } from "enzyme";
import Experience from "./Experience";

describe("Experience", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Experience />);
    expect(wrapper).toMatchSnapshot();
  });
});
