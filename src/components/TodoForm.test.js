import React from "react";
import { mount, shallow } from "enzyme";
import TodoForm from "./TodoForm";

describe("TodoForm component test", () => {
  it("Check weather the component render properly", () => {
    expect(shallow(<TodoForm />).exists()).toBe(true);
  });

  it("Todo input box check", () => {
    const form = mount(<TodoForm />);
    const input = form.find('input').at(0);
    input.value = 'test';
    expect(input.value).toEqual('test');
  });

  it("Todo default text state check", () => {
    const form = shallow(<TodoForm />);
    expect(form.state('text')).toEqual('');
  });
});
