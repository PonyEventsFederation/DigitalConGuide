import React from 'react'
import SwipeableRoutes from "react-swipeable-routes"
import {Route} from 'react-router-dom'

import Layout from "../Layout"
import PagesStatic from "./Static"

module.exports = function () {
    let footer = this.props.footerPages || [];
    let routes = [];

    routes = routes.concat(footer.map((item, i) => {
        let componentFunction = (routerProps) => {
            const finalProps = Object.assign({
                file: item.file,
                renderLayout: false,
                dispatchTitle: false
            }, routerProps);
            return (
                React.createElement(PagesStatic, finalProps)
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