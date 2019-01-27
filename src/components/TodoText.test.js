import React from "react";
import { shallow } from "enzyme";
import TodoText from "./TodoText";

describe("TodoText component test", () => {
  // make our assertion and what we expect to happen
  it("Existence check", () => {
    expect(shallow(<TodoText />).exists()).toBe(true);
  });
});
