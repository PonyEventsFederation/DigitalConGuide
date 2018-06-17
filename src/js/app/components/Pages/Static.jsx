import React from 'react'
import Element from '../../../lib/Element'

import * as NavActions from "../../actions/navigation.actions";
import axios from "axios/index";
import * as FooterActions from "../../actions/footer.actions";

class PagesStatic extends Element {

    configure() {
        this.template = require("./Static.tpl");
        this.state = {
            title: "",
            text: []
        }
    }

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        const file = this.props.file;
        if (!file) {
            return;
        }

        const content = await axios.get("/data/static/" + file + ".json");
        const page = content.data;

        this.dispatch(NavActions.setTitle(page.title));
        this.setState(page);
    }
}

export default PagesStatic