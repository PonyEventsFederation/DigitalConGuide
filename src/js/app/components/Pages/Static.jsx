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
        super.componentDidMount();
        this.loadData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.file !== prevProps.file) {
            this.dispatch(FooterActions.setLoading());
            this.loadData();
        }
    }

    async loadData() {
        const file = this.props.file;
        if (!file) {
            return;
        }

        const content = await axios.get("/data/static/" + file + ".json");
        const page = content.data;

        if (this.props.dispatchTitle) {
            this.dispatch(NavActions.setTitle(page.title));
        }

        if (this._mounted) {
            this.setState(page);
        }
    }
}

PagesStatic.defaultProps = {
    renderLayout: true,
    dispatchTitle: true
};

export default PagesStatic