import React from 'react'
import Element from '../../../lib/Element'
import PropTypes from "prop-types";

class LayoutContent extends Element {

    configure() {
        this.template = require("./Content.tpl");
    }

}

export default LayoutContent

LayoutContent.propTypes = {
    footerless: PropTypes.bool
};