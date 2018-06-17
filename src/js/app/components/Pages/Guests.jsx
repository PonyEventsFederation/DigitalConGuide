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

class PagesGuests extends Element {

    configure() {
        this.template = require("./Guests.tpl");

        this.footerData = [];
        this.state = {
            swipeLeft: false,
            swipeRight: false,
            index: 0,
            loading: true
        }
    }

    componentDidMount() {
        this.dispatch(FooterActions.setLoading());
        this.loadData();
    }

    async loadData() {
        this.setState({
            loading: true
        });

        let index = this.state.index;

        const content = await axios.get("/data/vip.json");
        this.footerData = content.data;

        const activeIndex = this.footerData.findIndex((item, i) => {
            return item.url === this.props.location.pathname;
        });

        if (activeIndex < 0) {
            const firstUrl = this.footerData[0].url;
            this.props.history.replace(firstUrl);
        }
        else {
            index = activeIndex;
        }

        this.dispatch(FooterActions.setData(this.footerData));

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

    onChangeIndex(index, indexLates, data) {
        this.dispatch(NavActions.setTitle(this.footerData[index].title));

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

PagesGuests = connect(mapStateToProps)(PagesGuests);

export default PagesGuests