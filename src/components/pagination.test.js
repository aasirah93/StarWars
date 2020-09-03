import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Pagination from './pagination'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Searching/>', () => {
    it('renders the Previous button', () => {
        const wrapper = shallow(<Pagination/>)
        expect (wrapper.find('Previous'));
    });
    it('renders the Next button', () => {
        const wrapper = shallow(<Pagination/>)
    expect (wrapper. find ('Next'));
        
});
});