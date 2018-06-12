import React, {Component} from "react"
import PropTypes from "prop-types"
import getValueOfObjectByPath from "./Tools/getValueOfObjectByPath";

class Element extends Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.configure();
    }

    getState(path) {
        return getValueOfObjectByPath(path, this.context.store.getState());
    }

    getLocalState(path) {
        return getValueOfObjectByPath(path, this.state || {});
    }

    getContext(path) {
        return getValueOfObjectByPath(path, this.context || {});
    }

    getProps(path) {
        return getValueOfObjectByPath(path, this.props || {});
    }

    getNamespaceData(path) {
        return getValueOfObjectByPath("namespaceData." + path, this.context || {});
    }

    translate() {
        return this.context.translate.apply(this.context.translate, arguments);
    }

    configure() {

    }

    render() {
        return this.template.call(this);
    }

    /**
     * Wrapper function to dispatch an action on the store.
     *
     * @param action
     */
    dispatch(action) {
        this.context.store.dispatch(action);
    }
};

Element.contextTypes = {
    translate: PropTypes.func,
    store: PropTypes.object,
    app: PropTypes.object,
    navigation: PropTypes.object,
    namespace: PropTypes.string,
    namespaceData: PropTypes.object
};

export default Element