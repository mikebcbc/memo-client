import {SET_AUTH_TOKEN, SET_CURRENT_USER, POPULATE_TOPICS, POPULATE_SITES} from '../actions';

const initialState = {
	authToken: null,
	topics: [],
	sites: [],
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
	} else if (action.type === POPULATE_SITES) {
		return Object.assign({}, state, {
			sites: action.sites
		})
	}
	return state;
}