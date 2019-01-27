import React from 'react';
import App from './App';
import { shallow } from "enzyme";


describe('<App>', () => {
  it('App file existence check ', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.exists()).toBe(true);
  })
})
