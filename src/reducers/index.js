import {SET_AUTH_TOKEN, SET_CURRENT_USER, POPULATE_TOPICS, POPULATE_SITES, POPULATE_TIME} from '../actions';

const initialState = {
	authToken: null,
	topics: [],
	sites: [],
	timeSpent: 0,
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
	} else if (action.type === POPULATE_TIME) {
		return Object.assign({}, state, {
			timeSpent: action.time
		})
	}
	return state;
}