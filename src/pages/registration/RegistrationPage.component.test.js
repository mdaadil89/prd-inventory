import React from 'react'
import {mount, shallow} from 'enzyme'
import RegistrationPage from './RegistrationPage.component';

describe('Registration Page rendering of elements' , () => {
    let wrapper1;
    beforeEach(() => { 
        wrapper1 = shallow(<RegistrationPage/>)
    })
    
    it('renders correct heading for Products List', () => {
        expect(wrapper1.find('h3').render().text()).toEqual("Registration Form");
    })
});