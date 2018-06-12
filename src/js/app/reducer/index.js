import {createSelector} from 'reselect'

const getRouting = (state) => state.routing;
const getNavigation = (state) => state.navigation;

/**
 * @returns {boolean}
 */
export const getPathname = createSelector(
    [getRouting],
    (routing) => routing.location.pathname || null
);
/**
 * @returns {boolean}
 */
export const getLocationState = createSelector(
    [getRouting],
    (routing) => routing.location.state || null
);
/**
 * @returns {boolean}
 */
export const getNavigationActive = createSelector(
    [getNavigation],
    (nav) => nav.active || false
);