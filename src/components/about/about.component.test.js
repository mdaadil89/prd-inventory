import React from 'react'
import {mount, shallow} from 'enzyme'
import About from './about.component'
import toJson from 'enzyme-to-json';


describe('About Snapshot', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<About/>);
    });

    test('renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot(); 
    });  
     
});

describe('About Page rendering of elements' , () => {
    let wrapper1;
    beforeEach(() => { 
        wrapper1 = shallow(<About/>)
    })
    it('renders correct heading for Products List', () => {
        expect(wrapper1.find('h3').render().text()).toEqual("PRODUCT INVENTORY");

    })  
    it('has 1 paragraph element', () => {
        expect(wrapper1.find('p').length).toEqual(1);
    })
    
});