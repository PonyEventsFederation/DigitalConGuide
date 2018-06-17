import React from 'react'
import Element from '../../../lib/Element'

class DetailPerson extends Element {

    configure() {
        this.template = require("./Person.tpl");
    }
}

export default DetailPerson