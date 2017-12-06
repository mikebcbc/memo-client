import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {saveAuthToken, clearAuthToken} from '../local-storage';

import {countTopics, countSites, countTime} from '../utils';

// APP ACTIONS

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

// AUTH ACTIONS

const storeAuthInfo = (authToken, dispatch) => {
	const decoded = jwtDecode(authToken);
	dispatch(setAuthToken(authToken));
	dispatch(setCurrentUser(decoded.user));
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

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = currentUser => ({
	type: SET_CURRENT_USER,
	currentUser
});

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
		.then(res => res.json())
		.then(({authToken}) => storeAuthInfo(authToken, dispatch))
		.catch(err => {
			const {code} = err;
			if (code === 401) {
				return Promise.reject(
					new SubmissionError({ // How to use/display this on form?
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

