import Reducer from "../../lib/Reducer"
import {NAVIGATION_CLOSE, NAVIGATION_OPEN, SET_TITLE} from "../actions/navigation.actions";

class ReducerNavigation extends Reducer {

    getReducer() {
        let initialState = this.getInitialState();

        return (state = initialState, action) => {
            switch (action.type) {
                case NAVIGATION_OPEN:
                    return Object.assign({}, state, {
                        active: true
                    });
                case NAVIGATION_CLOSE:
                    return Object.assign({}, state, {
                        active: false
                    });
                case SET_TITLE:
                    return Object.assign({}, state, {
                        title: action.title,
                        prevTitle: state.title
                    });
                default:
                    return state;
            }
        }
    }

    getInitialState() {
        return {
            active: false,
            title: "GalaCon 2018"
        }
    }

    isBlacklisted() {
        return true;
    }

}

export default ReducerNavigation;