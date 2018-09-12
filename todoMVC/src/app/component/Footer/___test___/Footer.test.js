import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../index';

describe(' <Footer /> Component', () => {
    it('render a footer component', () => {
        const wrapper = shallow(
            <Footer />,
        );
        console.log(wrapper.debug());
        expect(wrapper.find('.description').at(0).text()).toBe('Double-click to edit a todo');
        expect(wrapper.find('.description')).toHaveLength(3);
    });
});
