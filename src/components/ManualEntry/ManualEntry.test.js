import React from 'react';
import {shallow} from 'enzyme';

import ManualEntry from './ManualEntry';

describe('<ManualEntry />', () => {
	it('Renders without crashing', () => {
		shallow(<ManualEntry />);
	});
})