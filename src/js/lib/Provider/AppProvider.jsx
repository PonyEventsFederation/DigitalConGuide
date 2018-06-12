import React, {Children, Component} from "react"
import PropTypes from 'prop-types'

class AppProvider extends Component {

    getChildContext() {
        return {
            app: this.props.app
        }
    }

    render() {
        return Children.only(this.props.children)
    }
}

AppProvider.propTypes = {
    app: PropTypes.object.isRequired,
};

AppProvider.childContextTypes = {
    app: PropTypes.object,
};

export default AppProvider