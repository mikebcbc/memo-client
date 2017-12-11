import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {loadAuthToken} from './local-storage';
import {setAuthToken} from './actions';
import thunk from 'redux-thunk';

import memoReducer from './reducers';

const store = createStore(
    combineReducers({
        form: formReducer,
        memo: memoReducer
    }),
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
}

export default store;