import React from 'react';
import {shallow} from 'enzyme';

import Stats from './Stats';

describe('<Stats />', () => {
	it('Renders without crashing', () => {
		shallow(<Stats />);
	});
})