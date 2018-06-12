import React from 'react'
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import {connect} from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import {Switch} from 'react-router-dom'
import {routerMiddleware, routerReducer} from 'react-router-redux'
import loggerMiddleware from './Middleware/logger'
import crashReporterMiddleware from './Middleware/crashReporter'
import promiseMiddleware from 'redux-promise';
import {CookiesProvider} from 'react-cookie';
import getValueOfObjectByPath from "./Tools/getValueOfObjectByPath";
import {offline} from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createHistory();
const historyMiddleware = routerMiddleware(history);

export default class App {
    constructor(config) {
        let reducers = {
            routing: routerReducer
        };

        if (!config.reducers) {
            config.reducers = {}
        }

        // dont store routing offline.
        offlineConfig.persistOptions = {
            blacklist: ["routing"]
        };

        for (let key in config.reducers) {
            let reducerClass = new config.reducers[key](this, key);
            reducers[key] = reducerClass.getReducer();

            if (reducerClass.isBlacklisted()) {
                offlineConfig.persistOptions.blacklist.push(key);
            }
        }

        const store = createStore(
            combineReducers(reducers),
            composeEnhancers(offline({...offlineConfig, ...this.applyOfflineConfig()}), applyMiddleware(historyMiddleware, promiseMiddleware, loggerMiddleware, crashReporterMiddleware, ...this.registerMiddleware()))
        );

        const ConnectedSwitch = connect(state => ({
            location: state.location
        }))(Switch);

        this.cookiesProvider = new CookiesProvider({});
        this.store = store;
        this.config = config;
        this.history = history;
        this.ConnectedSwitch = ConnectedSwitch;

        this.initApp();
    }

    getRouter() {
        throw new Error("overwrite getRouter!");
    }

    getState(path) {
        return getValueOfObjectByPath(path, this.store.getState());
    }

    initApp() {

    }

    /**
     * returns an Array with middleware to be applied to the store.
     * @returns {Array}
     */
    registerMiddleware() {
        return [];
    }

    applyOfflineConfig() {
        return {};
    }
}