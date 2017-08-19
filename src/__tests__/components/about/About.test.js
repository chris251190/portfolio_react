import React from 'react';
import { mount } from 'enzyme';
import About from '../../../components/about/About';

test('AboutComponent renders the text inside it', () => {
    const wrapper = mount(
        <About />
    );
    const p = wrapper.find('.project-grid');
    expect(p.text()).toBe('Hey there! This is me, Christian. I\'m 26 years old and a Fullstack Developer who is interested in Java(Spring), Ruby on Rails and Javascript especially in React.');
});
