import React from 'react'
import {mount, shallow} from 'enzyme'
import AboutPage from './aboutpage.component';
import toJson from 'enzyme-to-json';


describe('AboutPage Snapshot', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<AboutPage/>);
    }); 

    test('renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot(); 
    }); 
     
});

describe('About Page rendering of elements' , () => {
    let wrapper1;
    beforeEach(() => { 
        wrapper1 = shallow(<AboutPage/>)
    })
    
    it('renders one About React component', () => {
        expect(wrapper1.find('About').length).toEqual(1)
    })  
});