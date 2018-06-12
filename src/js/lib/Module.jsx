import React from 'react';
import ReactDOM from 'react-dom';

import {ConnectedRouter} from 'react-router-redux'
import {Provider} from 'react-redux'
import AppProvider from './Provider/AppProvider'
import {CookiesProvider} from 'react-cookie'

let AppInstance;
let AppRouter;
let TargetId;

export default class Module {

    static async renderApp() {
        ReactDOM.render(
            <Provider store={AppInstance.store}>
                <CookiesProvider>
                    <AppProvider app={AppInstance}>
                        <ConnectedRouter history={AppInstance.history}>
                            <AppRouter>

                            </AppRouter>
                        </ConnectedRouter>
                    </AppProvider>
                </CookiesProvider>
            </Provider>
            ,
            document.getElementById(TargetId)
        );
    }

    static run(App, target) {
        AppInstance = App;
        AppRouter = App.getRouter.bind(App);
        TargetId = target;
        this.renderApp();
    }

}