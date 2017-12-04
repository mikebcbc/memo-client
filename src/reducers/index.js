import {SET_AUTH_TOKEN, SET_CURRENT_USER, POPULATE_TOPICS} from '../actions';

const initialState = {
	authToken: null,
	topics: [],
	sites: [{
		label: 'YouTube',
		range: 5
	},
	{
		label: 'Medium',
		range: 3
	},
	{
		label: 'StackOverflow',
		range: 4
	}],
	timeSpent: [{ 
		day: 'Monday',
		time: 60 // should I store time like this?
	},
	{
		day: 'Tuesday',
		time: 20
	},
	{
		day: 'Wednesday',
		time: 42
	},
	{
		day: 'Thursday',
		time: 14
	}],
	content: [{
		topic: 'ReactJS',
		link: 'http://www.google.com'
	},
	{
		topic: 'NodeJS',
		link: 'http://www.npmjs.com'
	}]
}

export default function reducer(state = initialState, action) {
	if (action.type === SET_AUTH_TOKEN) {
		return Object.assign({}, state, {
			authToken: action.authToken
		});
	} else if (action.type === SET_CURRENT_USER) {
		return Object.assign({}, state, {
			currentUser: action.currentUser
		});
	} else if (action.type === POPULATE_TOPICS) {
		return Object.assign({}, state, {
			topics: action.topics
		})
	}
	return state;
}