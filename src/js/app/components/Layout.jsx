import React from 'react'
import Element from '../../lib/Element'
import PropTypes from "prop-types";

class Layout extends Element {

    configure() {
        this.template = require("./Layout.tpl");
    }

}

export default Layout;

Layout.propTypes = {
    hideFooter: PropTypes.bool
};