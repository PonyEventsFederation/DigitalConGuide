import React from 'react'
import Element from '../../../lib/Element'
import {connect} from "react-redux"
import * as NavActions from "../../actions/navigation.actions";

class LayoutDarkener extends Element {

    configure() {
        this.template = require("./Darkener.tpl");
        this.state.active = false;
    }

    close() {
        this.context.store.dispatch(NavActions.close());
    }

}

LayoutDarkener = connect((state) => {
    return {
        navigation: state.navigation
    }
})(LayoutDarkener);

export default LayoutDarkener