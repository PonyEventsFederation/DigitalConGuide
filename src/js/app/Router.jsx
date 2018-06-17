import React from 'react'
import {Switch, Route} from 'react-router-dom'

import PanelsNext from './components/Panels/Next'

import PagesStatic from './components/Pages/Static'
import PagesGuests from './components/Pages/Guests'

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
            <PropsRoute path="/imprint" component={PagesStatic} file="imprint" />
            <Route path="/guests" component={PagesGuests} />
            <Route path="/" component={PanelsNext} />
        </Switch>
    )
}