import React from 'react'
import {Switch, Route} from 'react-router-dom'

import PanelsNext from './components/Panels/Next'

export default (app) => {
    return (
        <Switch>
            <Route path="/" component={PanelsNext} />
        </Switch>
    )
}