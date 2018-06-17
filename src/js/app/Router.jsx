import React from 'react'
import {Route, Switch} from 'react-router-dom'

import PanelsNext from './components/Panels/Next'

import PagesStatic from './components/Pages/Static'
import PagesStaticList from './components/Pages/StaticList'
import PagesPersonList from './components/Pages/PersonList'

export default (app) => {
    return (
        <Switch>
            <Route path="/imprint" render={routeProps => <PagesStatic {...routeProps} file="imprint" />} />
            <Route path="/guests" render={routeProps => <PagesPersonList {...routeProps} file="vip" />} />
            <Route path="/buckball" render={routeProps => <PagesStaticList {...routeProps} file="buckball" />} />
            <Route path="/plushiecon" render={routeProps => <PagesStatic {...routeProps} file="plushiecon" />} />
            <Route path="/staff" render={routeProps => <PagesPersonList {...routeProps} file="staff" />} />
            <Route path="/" component={PanelsNext} />
        </Switch>
    )
}