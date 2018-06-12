import App from '../lib/App'
import Router from './Router'
import registerSagasWithMiddleware from './sagas';

import axios from 'axios';
import createSagaMiddleware from 'redux-saga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// connect redux-offline with Axios
const effect = (effect, _action) => axios(effect);
const discard = (error, _action, _retries) => {
    const {request, response} = error;
    if (!request) {
        throw error;
    } // There was an error creating the request
    if (!response) {
        return false;
    } // There was no response
    return 400 <= response.status && response.status < 500;
};

class MyApp extends App {
    initApp() {
        registerSagasWithMiddleware(sagaMiddleware);
    }

    applyOfflineConfig() {
        return {
            effect,
            discard
        }
    }

    registerMiddleware() {
        return [sagaMiddleware];
    }

    getRouter() {
        return new Router(this);
    }

}

export default new MyApp({
    reducers: {
    }
});