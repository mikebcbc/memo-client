import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {saveAuthToken, clearAuthToken} from '../local-storage';

const storeAuthInfo = (authToken, dispatch) => {
	const decoded = jwtDecode(authToken);
	dispatch(setAuthToken(authToken));
	dispatch(setCurrentUser(decoded.user));
	saveAuthToken(authToken);
}

// AUTH ACTIONS

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
	type: SET_AUTH_TOKEN,
	authToken
});

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = currentUser => ({
	type: SET_CURRENT_USER,
	currentUser
});

export const login = (username, password) => dispatch => {
	console.log(username);
	console.log(password);
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
					new SubmissionError({
						_error: 'Incorrect username or password.'
					})
				);
			}
		})
	);
};