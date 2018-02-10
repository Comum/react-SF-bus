import actions from '../actions';
import agency from '../actions/agencyActions';

const initalState = {
    agencies: [],
    agencyLoading: true,
    numAgencies: 0,
    agencyExpanded: '',
    agencyExpandedName: '',
    agencyRoutes: [],
    pickedRouteName: '',
    pickedRouteTag: ''
};

function reduceAgencyListRquested(state) {
    return {
        ...state,
        agencies: [],
        agencyLoading: true
    };
}

function reduceAgencyRoutesRquested(state, agency) {
    let agencyAttrs = agency.split('_');

    return {
        ...state,
        agencyRoutesLoading: true,
        agencyExpanded: agencyAttrs[0],
        agencyExpandedName: agencyAttrs[1]
    };
}

function reduceAgencyListReceived(state, agencies) {
    agencies = agencies.map(agency => {
        return agency;
    });
    return {
        ...state,
        agencies,
        agencyLoading: false,
        numAgencies: agencies.length
    };
}

function reduceAgencyRoutesReceived(state, routes) {
    let routesOutput = [];

    if (typeof routes.route.length === 'undefined') {
        routesOutput.push(routes.route);
    } else {
        routesOutput = routes.route.map(route => {
            return route;
        });
    }

    return {
        ...state,
        agencyRoutes: routesOutput
    };
}

function saveAgencyRoute(state, pickedRoute) {
    let routeAttrs = pickedRoute.split('_');

    return {
        ...state,
        agencyExpanded: routeAttrs[2],
        agencyExpandedName: routeAttrs[3],
        pickedRouteName: routeAttrs[1],
        pickedRouteTag: routeAttrs[0]
    };
}

export default (state, action) => {
    if (typeof state === 'undefined') {
        state = initalState;
    }
    switch (action.type) {
        case agency.AGENCY_LIST_REQUESTED:
            return reduceAgencyListRquested(state);
        case agency.AGENCY_LIST_RECEIVED:
            return reduceAgencyListReceived(state, action.data);
        case agency.AGENCY_ROUTES_REQUESTED:
            return reduceAgencyRoutesRquested(state, action.data);
        case agency.AGENCY_ROUTES_RECEIVED:
            return reduceAgencyRoutesReceived(state, action.data);
        case agency.SAVE_AGENCY_ROUTE:
            return saveAgencyRoute(state, action.data);
        default:
            return state;
    }
}
