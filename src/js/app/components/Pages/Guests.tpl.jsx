import React from 'react'
import SwipeableRoutes from "react-swipeable-routes"
import {Route} from 'react-router-dom'

import Layout from "../Layout"

import GuestsKellySheridan from '../Guests/KellySheridan'
import GuestsElleyRayHennesey from '../Guests/ElleyRayHennesey'
import GuestsAndyPrice from '../Guests/AndyPrice'
import GuestsClaireCorlette from '../Guests/ClaireCorlette'
import GuestsIanCorlette from '../Guests/IanCorlette'

const COMPONENTS = {
    "GuestsKellySheridan": GuestsKellySheridan,
    "GuestsElleyRayHennesey": GuestsElleyRayHennesey,
    "GuestsAndyPrice": GuestsAndyPrice,
    "GuestsClaireCorlette": GuestsClaireCorlette,
    "GuestsIanCorlette": GuestsIanCorlette
};

module.exports = function () {
    let footer = this.props.footerPages || [];
    let routes = [];

    routes = routes.concat(footer.map((item, i) => {
        let componentFunction = (routerProps) => {
            const component = COMPONENTS[item.component];

            return (
                React.createElement(component, routerProps)
            )
        };

        return (
            <Route key={item.url} exact path={item.url} render={componentFunction}/>
        )
    }).filter(v => !!v));

    let buttons = [];
    if (this.getLocalState("swipeLeft")) {
        buttons.push(<span key="page-back" className="page-back" onClick={this.onClickBack.bind(this)}>Zurück</span>);
    }
    if (this.getLocalState("swipeRight")) {
        buttons.push(<span key="page-next" className="page-next" onClick={this.onClickNext.bind(this)}>Weiter</span>);
    }

    return [
        <Layout key="layout" type="primary" hideFooter={false}>
            <SwipeableRoutes index={this.getLocalState("index")} onChangeIndex={this.onChangeIndex.bind(this)}>
                {
                    routes
                }
            </SwipeableRoutes>
        </Layout>
    ].concat(buttons);
};