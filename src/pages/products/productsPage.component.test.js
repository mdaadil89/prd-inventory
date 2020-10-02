import React from 'react'
import {mount, shallow} from 'enzyme'
import ProductsPage from './productsPage.component';
import toJson from 'enzyme-to-json';
import { BrowserRouter as Router } from 'react-router-dom';


describe('ProductsPage Snapshot', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Router><ProductsPage/></Router>);
    }); 

    test('renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot(); 
    }); 
     

 
});