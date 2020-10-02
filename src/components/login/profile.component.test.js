import React from 'react'
import {mount, shallow} from 'enzyme'
import Profile from './profile.component'
import toJson from 'enzyme-to-json';

describe('Profile Snapshot', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Profile/>);
    });

    test('renders correctly', () => { 
        expect(toJson(wrapper)).toMatchSnapshot(); 
    });  
     
});

describe('Profile Page rendering of elements' , () => {
    let wrapper1;
    beforeEach(() => { 
        wrapper1 = shallow(<Profile/>)
    })
      
    it('has 5 paragraph element', () => {
        expect(wrapper1.find('li').length).toEqual(5);
    })
    
});

