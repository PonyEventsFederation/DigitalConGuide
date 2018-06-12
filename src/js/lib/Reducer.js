import merge from 'deepmerge'

class Reducer {

    constructor(App) {
        this.App = App;
    }

    getReducer() {
        throw new Error("Overwrite getReducer");
    }

    applyState() {
        let vals = [
            ...arguments
        ];

        return merge.all(vals);
    }

    isBlacklisted() {
        return false;
    }
}

export default Reducer;