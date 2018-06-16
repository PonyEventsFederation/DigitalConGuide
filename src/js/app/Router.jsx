import React from 'react'
import {Switch, Route} from 'react-router-dom'

import PanelsNext from './components/Panels/Next'

import PagesImprint from './components/Pages/Imprint'
import PagesGuests from './components/Pages/Guests'

export default (app) => {
    return (
        <Switch>
            <Route path="/imprint" component={PagesImprint} />
            <Route path="/guests" component={PagesGuests} />
            <Route path="/" component={PanelsNext} />
        </Switch>
    )
}