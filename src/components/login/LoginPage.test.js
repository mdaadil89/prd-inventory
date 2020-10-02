import React from 'react'
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import {LoginPage} from './LoginPage';
import { BrowserRouter as Router } from 'react-router-dom';

const mockStore = configureMockStore();
const dispatch = jest.fn();
const handleSubmit = jest.fn();
const onSubmit = jest.fn();
let store;
const initProps = {
  onSubmit,
};

describe('LoginPage', () => {
  beforeAll(() => {
    store = mockStore({
      handleSubmit,
      dispatch,
    });
    dispatch.mockClear();
  });
  
  it('renders without exploding', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router><LoginPage {...initProps} /></Router>
      </Provider>,
    );

    expect(wrapper).toHaveLength(1);
    
  });

  it('has 2 text input elements', () => {
    const wrapper = mount(
        <Provider store={store}>
          <Router><LoginPage {...initProps} /></Router>
        </Provider>,
    );
    expect(wrapper.find('input').length).toEqual(2);
    })

    it('has a single button', () => {
        const wrapper = mount(
            <Provider store={store}>
              <Router><LoginPage {...initProps} /></Router>
            </Provider>,
        );
    expect(wrapper.find('button').length).toEqual(1);
    })

    it('renders without exploding', () => {
        const wrapper = shallow(
          <Provider store={store}>
            <Router><LoginPage {...initProps} /></Router>
          </Provider>,
        );
    
        expect(wrapper).toHaveLength(1);
        
      });
    
})