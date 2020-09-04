import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Pagination from './pagination'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Searching/>', () => {
    it('renders the Previous button', () => {
        const wrapper = shallow(<Pagination/>)
        const prevBtn = (wrapper.find('Previous[type="button"]'))
    });
    it('renders the Next button', () => {
        const wrapper = mount(<Pagination/>)
       const nextBtn = (wrapper. find ('Next[type="button"]'));
});
});