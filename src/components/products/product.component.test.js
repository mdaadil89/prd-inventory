import React from 'react'
import {mount, shallow} from 'enzyme'
import Product from './product.component'
import toJson from 'enzyme-to-json';


describe('Products Snapshot', () => {
    let wrapper; 
    let props;
    beforeEach(() => {
        //wrapper = mount(<Product/>);
         
           
            
            wrapper = mount(<Product/>);
    });

    test('renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot(); 
    }); 
     
});  