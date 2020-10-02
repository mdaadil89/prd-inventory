import React from 'react'
import {mount, shallow} from 'enzyme'
import SearchBox from './searchbox.component'
import toJson from 'enzyme-to-json';


describe('Searchbox Snapshot', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<SearchBox/>);
    });

    test('renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot(); 
    }); 
     
});