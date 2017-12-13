import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshToken} from './actions';
import thunk from 'redux-thunk';

import memoReducer from './reducers';

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
    devTools = a => a;
}

const store = createStore(
    combineReducers({
        form: formReducer,
        memo: memoReducer
    }),
    compose(applyMiddleware(thunk), devTools)
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshToken());
}

export default store;