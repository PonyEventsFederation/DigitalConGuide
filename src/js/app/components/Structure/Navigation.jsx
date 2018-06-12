import React from 'react'
import Element from '../../../lib/Element'
import {connect} from "react-redux"
import PropTypes from "prop-types";
import * as NavActions from "../../actions/navigation.actions";
import {getNavigationActive} from "../../reducer";

const mapStateToProps = (state) => {
    return {
        active: getNavigationActive(state)
    }
};

class StructureNavigation extends Element {

    configure() {
        this.template = require("./Navigation.tpl");
        this.state.active = false;
    }

    close() {
        this.dispatch(NavActions.close());
    }

}

StructureNavigation = connect(mapStateToProps)(StructureNavigation);

StructureNavigation.contextTypes = {
    router: PropTypes.shape({
        route: PropTypes.object.isRequired
    }).isRequired,
    store: PropTypes.object.isRequired
};

export default StructureNavigation