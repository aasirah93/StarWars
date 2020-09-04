import React from 'react'
import { configure, mount, shallow } from 'enzyme';
import sinon from 'sinon';
import App from './app'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<App/>', () => {
    it('renders the Previous button', () => {
        const wrapper = shallow(<App/>)
});
});