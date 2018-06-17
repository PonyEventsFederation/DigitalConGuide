import React from 'react'
import {Switch, Route} from 'react-router-dom'

import PanelsNext from './components/Panels/Next'

import PagesStatic from './components/Pages/Static'
import PagesPersonList from './components/Pages/PersonList'

export default (app) => {
    return (
        <Switch>
            <Route path="/imprint" render={routeProps => <PagesStatic {...routeProps} file="imprint" />} />
            <Route path="/guests" render={routeProps => <PagesPersonList {...routeProps} file="vip" />} />
            <Route path="/staff" render={routeProps => <PagesPersonList {...routeProps} file="staff" />} />
            <Route path="/" component={PanelsNext} />
        </Switch>
    )
}