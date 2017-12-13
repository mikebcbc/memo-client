import {SET_AUTH_TOKEN, POPULATE_TOPICS, SAVE_USER, UPDATE_COMPLETED, REMOVE_COMPLETED, UPDATE_CONTENT, POPULATE_SITES, POPULATE_TIME, POPULATE_REC, POPULATE_COMPLETED, CLEAR_AUTH, UPDATE_DISPLAYED} from '../actions';

const initialState = {
	authToken: null,
	contentDisplayed: [],
	currentUser: null,
	defaultTopics: ['ReactJS', 'NodeJS', 'Design', 'JavaScript', 'Dev Tools'],
	topics: [],
	sites: [],
	timeSpent: 0,
	content: [],
	completed: []
}

export default function reducer(state = initialState, action) {
	if (action.type === SET_AUTH_TOKEN) {
		return Object.assign({}, state, {
			authToken: action.authToken
		});
	} else if (action.type === CLEAR_AUTH) {
		return Object.assign({}, state, {
			authToken: null,
			currentUser: null
		});
	} else if (action.type === POPULATE_TOPICS) {
		return Object.assign({}, state, {
			topics: action.topics
		});
	} else if (action.type === POPULATE_SITES) {
		return Object.assign({}, state, {
			sites: action.sites
		});
	} else if (action.type === POPULATE_TIME) {
		return Object.assign({}, state, {
			timeSpent: action.time
		});
	} else if (action.type === POPULATE_REC) {
		return Object.assign({}, state, {
			content: action.content
		});
	} else if (action.type === POPULATE_COMPLETED) {
		return Object.assign({}, state, {
			completed: action.completed
		});
	} else if (action.type === UPDATE_CONTENT) {
			return Object.assign({}, state, {
				timeSpent: state.timeSpent += +action.timeChange
			})
	} else if (action.type === SAVE_USER) {
			return Object.assign({}, state, {
				user: action.user
			})
	} else if (action.type === UPDATE_COMPLETED) {
		const exists = state.completed.some((content) => content.contentId._id === action.content.contentId._id);
		if (!exists) {
			return Object.assign({}, state, {
				completed: [...state.completed, action.content]
			})
		} else {
			return Object.assign({}, state, {
				completed: state.completed.map((content) => {
					if(content.contentId._id === action.content.contentId._id) {
						return action.content;
					} else {
            return content;
					}
				})
			})
		}
	} else if (action.type === REMOVE_COMPLETED) {
		return Object.assign({}, state, {
			completed: state.completed.filter(content => content.contentId._id !== action.content.contentId._id)
		})
	} else if (action.type === UPDATE_DISPLAYED) {
		return Object.assign({}, state, {
			contentDisplayed: state.content.filter((content) => {
				return content.related_topic.name === action.topic;
			})
		});
	}
	return state;
}