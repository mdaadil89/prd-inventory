import React from 'react'
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import ProductForm from './productform.component';
import { BrowserRouter as Router } from 'react-router-dom';

const mockStore = configureMockStore();
const dispatch = jest.fn();
const handleSubmit = jest.fn();
const onSubmit = jest.fn();
let store;
const initProps = {
  onSubmit,
};

describe('ProductForm', () => {
  beforeAll(() => {
    store = mockStore({
      handleSubmit,
      dispatch,
    });
    dispatch.mockClear();
  });
  
  

  

    it('renders without exploding', () => {
        const wrapper = shallow(
          <Provider store={store}>
            <Router><ProductForm {...initProps} /></Router>
          </Provider>,
        );
    
        expect(wrapper).toHaveLength(1);
        
      });
    
})