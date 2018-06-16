import React from 'react'
import {Switch, Route} from 'react-router-dom'

import PanelsNext from './components/Panels/Next'
import PagesImprint from './components/Pages/Imprint'

export default (app) => {
    return (
        <Switch>
            <Route path="/imprint" component={PagesImprint} />
            <Route path="/" component={PanelsNext} />
        </Switch>
    )
}