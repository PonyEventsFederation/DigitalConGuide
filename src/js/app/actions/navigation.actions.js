export const NAVIGATION_OPEN = "NAVIGATION_OPEN";
export const APP_INIT_FINISHED = "APP_INIT_FINISHED";
export const NAVIGATION_CLOSE = "NAVIGATION_CLOSE";

export const initAppFinished = () => {
    return {
        type: APP_INIT_FINISHED
    }
};
export const close = () => {
    return {
        type: NAVIGATION_CLOSE
    }
};

export const open = () => {
    return {
        type: NAVIGATION_OPEN
    }
};