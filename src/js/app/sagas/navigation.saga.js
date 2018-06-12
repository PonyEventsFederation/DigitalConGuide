import {call, put, takeLatest} from 'redux-saga/effects'
import * as NavActions from "../actions/navigation.actions";
import axios from "axios"

function* hideNav(action) {
    try {
        yield put(NavActions.close());
    } catch (e) {
        console.log(e);
    }
}

function* hideNavSaga() {
    yield takeLatest("@@router/LOCATION_CHANGE", hideNav);
}

function* initApp(action) {
}

function* initAppSaga() {
    yield takeLatest(NavActions.APP_INIT_FINISHED, initApp);
}

export {
    hideNavSaga,
    initAppSaga
}