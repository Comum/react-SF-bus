import actions from '../actions';
import agency from '../actions/agencyActions';

const initalState = {
    agencies: [],
    agencyLoading: true,
    numAgencies: 0,
    agencyExpanded: '',
    agencyRoutes: []
};

function reduceAgencyListRquested(state) {
    return {
        ...state,
        agencies: [],
        agencyLoading: true
    };
}

function reduceAgencyRoutesRquested(state, agencyTag) {
    return {
        ...state,
        agencyRoutesLoading: true,
        agencyExpanded: agencyTag
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
        default:
            return state;
    }
}
