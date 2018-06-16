import React from 'react'
import Element from '../../../lib/Element'
import {connect} from "react-redux";
import {getNavigationActive, getNavigationTitle, getPathname} from "../../reducer";
import * as NavActions from "../../actions/navigation.actions";

const mapStateToProps = (state) => {
    return {
        navActive: getNavigationActive(state),
        pathname: getPathname(state),
        navTitle: getNavigationTitle(state),
    }
};

class LayoutHeader extends Element {

    configure() {
        this.template = require("./Header.tpl");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            title: nextProps.navTitle
        };
    }

    toggleMenu() {
        if (this.props.navActive) {
            this.dispatch(NavActions.close());
        } else {
            this.dispatch(NavActions.open());
        }
    }

}

LayoutHeader = connect(mapStateToProps)(LayoutHeader);

export default LayoutHeader;