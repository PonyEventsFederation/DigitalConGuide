import React from 'react'
import Element from '../../../lib/Element'
import * as NavActions from "../../actions/navigation.actions";


class PagesHome extends Element {

    configure() {
        this.template = require("./Home.tpl");
    }

    componentDidMount() {
        super.componentDidMount();
        this.dispatch(NavActions.setTitle("GalaCon 2018"));
    }

}

export default PagesHome