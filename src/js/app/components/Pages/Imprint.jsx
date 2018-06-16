import React from 'react'
import Element from '../../../lib/Element'

import * as NavActions from "../../actions/navigation.actions";

class PagesImprint extends Element {

    configure() {
        this.template = require("./Imprint.tpl");
    }

    componentDidMount() {
        this.dispatch(NavActions.setTitle("Imprint"));
    }
}

export default PagesImprint