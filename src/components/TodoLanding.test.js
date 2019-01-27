import React from "react";
import { shallow } from "enzyme";
import TodoLanding from "./TodoLanding";

describe("TodoLanding component test", () => {
  it("Check weather the component render properly", () => {
    expect(shallow(<TodoLanding />).exists()).toBe(true);
  });

  it("Add todo heading check", () => {
    const wrapper = shallow(<TodoLanding />);
    const text = wrapper.find('h3').at(0).text()
    expect(text).toEqual('Add Todo');
  });

  it("Not Complete count check with header", () => {
    const wrapper = shallow(<TodoLanding />);
    const text = wrapper.find('h3').at(1).text()
    expect(text).toEqual('Todo 0');
  });

  it("Complete count check with header", () => {
    const wrapper = shallow(<TodoLanding />);
    const text = wrapper.find('h3').at(2).text()
    expect(text).toEqual('Completed 0');
  });
});
