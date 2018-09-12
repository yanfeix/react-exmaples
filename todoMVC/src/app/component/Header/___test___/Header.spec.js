import React from 'react';
import { shallow } from 'enzyme';
import Header from '..';

describe(' <Headr /> Component ', () => {
    it('render a header component ', () => {
        const wrapper = shallow(
            <Header />,
        );
        
        expect(wrapper.find('span')).toHaveLength(1);
        console.log(wrapper.debug());

        const span = wrapper.find('span');
        expect(span.text()).toBe('todos');
        expect(span.hasClass('title')).toBeTruthy();
    });
});
