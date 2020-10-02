import React from 'react'
import {mount, shallow} from 'enzyme'
import ProductView from './productView.component'
import toJson from 'enzyme-to-json';


describe('AllProductsPage Snapshot', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<ProductView/>);
    });

    test('renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot(); 
    }); 
     
});