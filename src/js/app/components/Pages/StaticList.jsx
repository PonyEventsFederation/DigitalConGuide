import React from 'react'
import Element from '../../../lib/Element'
import axios from "axios"
import {connect} from "react-redux"

import * as FooterActions from "../../actions/footer.actions";
import * as NavActions from "../../actions/navigation.actions";
import {getFooterPages} from "../../reducer";

const mapStateToProps = (state) => {
    return {
        footerPages: getFooterPages(state)
    }
};

class PagesStaticList extends Element {

    configure() {
        this.template = require("./StaticList.tpl");

        this.footerData = [];
        this.state = {
            swipeLeft: false,
            swipeRight: false,
            index: 0,
            loading: true
        }
    }

    componentDidMount() {
        super.componentDidMount();
        this.dispatch(FooterActions.setLoading());
        this.loadData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.file !== prevProps.file) {
            this.dispatch(FooterActions.setLoading());
            this.loadData();
        }
    }

    async loadData() {
        this.setState({
            loading: true
        });

        let index = this.state.index;
        const file = this.props.file;
        if (!file) {
            return;
        }

        const content = await axios.get("/data/staticlist/" + file + ".json");
        this.footerData = content.data.pages;
        this.baseTitle = content.data.baseTitle;

        const activeIndex = this.footerData.findIndex((item, i) => {
            return item.url === this.props.location.pathname;
        });

        if (activeIndex < 0) {
            const firstUrl = this.footerData[0].url;
            this.props.history.replace(firstUrl);
            index = 0;
        }
        else {
            index = activeIndex;
        }

        this.dispatch(FooterActions.setData(this.footerData));
        this.setTitle(index);

        this.setState({
            loading: false,
            index: index
        });
    }

    onClickNext() {
        let index = this.state.index;
        this.onChangeIndex(++index)
    }

    onClickBack() {
        let index = this.state.index;
        this.onChangeIndex(--index)
    }

    setTitle(index) {
        let titleParts = [];
        if (this.baseTitle) {
            titleParts.push(this.baseTitle);
        }
        if (this.footerData[index] && this.footerData[index].title) {
            titleParts.push(this.footerData[index].title);
        }

        this.dispatch(NavActions.setTitle(titleParts.join(' - ')));
    }

    onChangeIndex(index, indexLates, data) {
        this.setTitle(index);

        this.setState({
            index: index,
            swipeLeft: this._showLeftButton(index),
            swipeRight: this._showRightButton(index)
        });
    }

    _showLeftButton(index) {
        return !(index === 0);
    }

    _showRightButton(index) {
        return !(index === this.footerData.length - 1);
    }
}

PagesStaticList = connect(mapStateToProps)(PagesStaticList);

export default PagesStaticList