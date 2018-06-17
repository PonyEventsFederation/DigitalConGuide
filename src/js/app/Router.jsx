import React from 'react'
import {Switch, Route} from 'react-router-dom'

import PanelsNext from './components/Panels/Next'

import PagesStatic from './components/Pages/Static'
import PagesPersonList from './components/Pages/PersonList'

export default (app) => {
    const renderMergedProps = (component, ...rest) => {
        const finalProps = Object.assign({}, ...rest);
        return (
            React.createElement(component, finalProps)
        );
    };

    const PropsRoute = ({ component, ...rest }) => {
        return (
            <Route {...rest} render={routeProps => {
                return renderMergedProps(component, routeProps, rest);
            }}/>
        );
    };

    return (
        <Switch>
            <Route path="/imprint" render={routeProps => <PagesStatic {...routeProps} file="imprint" />} />
            <Route path="/guests" render={routeProps => <PagesPersonList {...routeProps} file="vip" />} />
            <Route path="/" component={PanelsNext} />
        </Switch>
    )
}