import React from 'react';
import {shallow} from 'enzyme';

import {TimeStats} from './TimeStats';

describe('<TimeStats />', () => {
	it('Renders without crashing', () => {
		shallow(<TimeStats />);
	});
})