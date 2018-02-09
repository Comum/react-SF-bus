import actions from '../actions';
import agency from '../actions/agencyActions';

const initalState = {
    agencies: [],
    agencyLoading: false,
    numAgencies: 0
};

function reduceAgencyListRquested(state) {
    return {
        ...state,
        agencies: [],
        agencyLoading: true
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

export default (state, action) => {
    if (typeof state === 'undefined') {
        state = initalState;
    }
    switch (action.type) {
        case agency.AGENCY_LIST_RECEIVED:
            return reduceAgencyListReceived(state, action.data);
        case agency.AGENCY_LIST_REQUESTED:
            return reduceAgencyListRquested(state);
        default:
            return state;
    }
}
