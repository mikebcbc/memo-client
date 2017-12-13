import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {saveAuthToken, clearAuthToken} from '../local-storage';

import {countTopics, countSites, countTime, normalizeResponseErrors} from '../utils';

// APP ACTIONS

export const UPDATE_DISPLAYED = 'UPDATE_DISPLAYED';
export const updateDisplayed = (topic) => ({
	type: UPDATE_DISPLAYED,
	topic
});

export const POPULATE_TOPICS = 'POPULATE_TOPICS';
export const populateTopics = (topics) => ({
	type: POPULATE_TOPICS,
	topics
});

export const POPULATE_SITES = 'POPULATE_SITES';
export const populateSites = (sites) => ({
	type: POPULATE_SITES,
	sites
});

export const POPULATE_TIME = 'POPULATE_TIME';
export const populateTime = (time) => ({
	type: POPULATE_TIME,
	time
});

export const POPULATE_REC = 'POPULATE_REC';
export const populateRec = (content) => ({
	type: POPULATE_REC,
	content
});

export const POPULATE_COMPLETED = 'POPULATE_COMPLETED';
export const populateCompleted = (completed) => ({
	type: POPULATE_COMPLETED,
	completed
});

export const UPDATE_CONTENT = 'UPDATE_CONTENT';
export const updateContent = (content, timeChange) => ({
	type: UPDATE_CONTENT,
	content,
	timeChange
});

export const SAVE_USER = 'SAVE_USER';
export const saveUser = (user) => ({
	type: SAVE_USER,
	user
});

export const UPDATE_COMPLETED = 'UPDATE_COMPLETED';
export const updateCompleted = (content) => ({
	type: UPDATE_COMPLETED,
	content
});

export const REMOVE_COMPLETED = 'REMOVE_COMPLETED';
export const removeCompleted = (content) => ({
	type: REMOVE_COMPLETED,
	content
});

export const fetchUser = (token) => dispatch => {
	fetch(`${API_BASE_URL}/users`, {
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${token}`
		}
	})
	.then(res => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then(user => {
		let countedTopics = countTopics(user.content);
		let countedSites = countSites(user.content);
		let countedTime = countTime(user.content);
		dispatch(populateTopics(countedTopics));
		dispatch(populateSites(countedSites));
		dispatch(populateTime(countedTime));
		dispatch(saveUser(user));
	})
}

export const fetchRec = (token) => dispatch => {
	fetch(`${API_BASE_URL}/contents/rec-content`, {
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${token}`
		}
	})
	.then(res => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then(content => {
		dispatch(populateRec(content));
	})
}

export const fetchCompleted = (token) => dispatch => {
	fetch(`${API_BASE_URL}/users/completed-content`, {
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${token}`
		}
	})
	.then(res => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then(completed => {
		dispatch(populateCompleted(completed));
	})
}

export const acceptExtension = (content, user, token) => dispatch => {
	console.log(content);
	console.log(user);
	console.log(token);
	const index = user.content.findIndex((c) => {
		return c.contentId._id === content.contentId._id;
	});
	if (index > -1) {
		user.content[index] = content;
	} else {
		user.content.push(content);
	}
	let countedTopics = countTopics(user.content);
	let countedSites = countSites(user.content);
	let countedTime = countTime(user.content);
	dispatch(populateTopics(countedTopics));
	dispatch(populateSites(countedSites));
	dispatch(populateTime(countedTime));
	dispatch(saveUser(user));
	if (content.completed) {
		dispatch(updateCompleted(content));
	} else {
		dispatch(removeCompleted(content));
	}
}

export const submitContent = (values, user, token) => dispatch => {
	fetch(`${API_BASE_URL}/users/content`, {
		method: 'POST',
		body: JSON.stringify(values),
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
	.then(res => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then((content) => {
		const index = user.content.findIndex((c) => {
			return c.contentId._id === content.newContent.contentId._id;
		});
		if (index > -1) {
			user.content[index] = content.newContent;
		} else {
			user.content.push(content.newContent);
		}
		let countedTopics = countTopics(user.content);
		let countedSites = countSites(user.content);
		let countedTime = countTime(user.content);
		dispatch(populateTopics(countedTopics));
		dispatch(populateSites(countedSites));
		dispatch(populateTime(countedTime));
		dispatch(saveUser(user));
		if (content.newContent.completed) {
			dispatch(updateCompleted(content.newContent));
		} else {
			dispatch(removeCompleted(content.newContent));
		}
	});
}

// AUTH ACTIONS

const storeAuthInfo = (authToken, dispatch) => {
	const decoded = jwtDecode(authToken);
	dispatch(setAuthToken(authToken));
	dispatch(saveUser(decoded.user));
	saveAuthToken(authToken);
}

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
	type: SET_AUTH_TOKEN,
	authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const register = (username, password) => dispatch => {
	return (
		fetch(`${API_BASE_URL}/auth/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password
			})
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({authToken}) => storeAuthInfo(authToken, dispatch))
		.catch(err => {
			const {code} = err;
			if (code === 401) {
				return Promise.reject(
					new SubmissionError({
						_error: 'Incorrect username or password.'
					})
				);
			}
		})
	);
};

export const login = (username, password) => dispatch => {
	return (
		fetch(`${API_BASE_URL}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password
			})
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({authToken}) => storeAuthInfo(authToken, dispatch))
		.catch(err => {
			const {code} = err;
			if (code === 401) {
				return Promise.reject(
					new SubmissionError({
						_error: 'Incorrect username or password.'
					})
				);
			}
		})
	);
};

export const refreshToken = () => (dispatch, getState) => {
	const authToken = getState().memo.authToken;
	return fetch(`${API_BASE_URL}/auth/refresh`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${authToken}`
		}
	})
	.then(res => res.json())
	.then(({authToken}) => storeAuthInfo(authToken, dispatch))
	.catch(err => {
		dispatch(clearAuth());
		clearAuthToken(authToken);
	});
};

