import React from 'react'
import Element from '../../../lib/Element'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFooterPages, getLocationState, getPathname} from "../../reducer";

const mapStateToProps = (state) => {
    return {
        pages: getFooterPages(state),
        pathname: getPathname(state),
        locationState: getLocationState(state)
    }
};

class LayoutFooter extends Element {
    configure() {
        this.template = require("./Footer.tpl");
        this.swiper = null;
    }

    componentDidMount() {
        this.focusActive();
    }

    toggleFilter() {
        this.dispatch(toggleFilter());
    }

    focusActive() {
        if (!this.currentActive) {
            return;
        }

        if (this.swiper) {
            this.swiper.slideTo(this.currentActive.pos);
        }
    }

    isActive(item, match, location) {
        if (!match) {
            return false;
        }

        this.currentActive = item;
        this.focusActive();

        return true;
    }
}

LayoutFooter = connect(mapStateToProps)(LayoutFooter);

LayoutFooter.contextTypes = {
    router: PropTypes.shape({
        route: PropTypes.object.isRequired
    }).isRequired,
    store: PropTypes.object.isRequired
};

export default LayoutFooter