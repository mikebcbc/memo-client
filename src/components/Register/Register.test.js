import React from 'react';
import {shallow} from 'enzyme';

import {Register} from './Register';

describe('<Register />', () => {
	it('Renders without crashing', () => {
		shallow(<Register />);
	});

	it('Redirects when user is not authenticated', () => {
		const wrapper = shallow(<Register />);
		wrapper.setProps({loggedIn: true});
		expect(wrapper.find('Redirect')).toHaveLength(1);
	})
})