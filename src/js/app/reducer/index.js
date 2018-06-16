import {createSelector} from 'reselect'

const getRouting = (state) => state.routing;
const getNavigation = (state) => state.navigation;
const getFooter = (state) => state.footer;

export const getPathname = createSelector(
    [getRouting],
    (routing) => routing.location.pathname || null
);

export const getLocationState = createSelector(
    [getRouting],
    (routing) => routing.location.state || null
);

export const getNavigationActive = createSelector(
    [getNavigation],
    (nav) => nav.active || false
);

export const getFooterPages = createSelector(
    [getFooter],
    (footer) => footer.pages || []
);

export const getNavigationTitle = createSelector(
    [getNavigation],
    (nav) => nav.title || null
);