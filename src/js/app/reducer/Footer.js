import Reducer from "../../lib/Reducer"
import {FOOTER_DATA_END} from "../actions/footer.actions";

class ReducerFooter extends Reducer {

    getReducer() {
        let initialState = this.getInitialState();

        return (state = initialState, action) => {
            switch (action.type) {
                case FOOTER_DATA_END:
                    return Object.assign({}, state, {
                        loading: false,
                        loaded: true,
                        pages: action.data
                    });
                default:
                    return state;
            }
        }
    }

    getInitialState() {
        return {
            pages: []
        }
    }

    isBlacklisted() {
        return true;
    }

}

export default ReducerFooter;