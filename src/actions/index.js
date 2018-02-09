import fetch from 'cross-fetch';

import agencyActions from './agencyActions';

function createAction(actionType) {
    return data => {
        let action = {type: actionType};
        if (typeof data !== 'undefined') {
            action.data = data;
        }
        return action;
    }
}

export const receivedAgencies = createAction(agencyActions.AGENCY_LIST_RECEIVED);

const requestedAgencies = createAction(agencyActions.AGENCY_LIST_REQUESTED);
export const receiveBusAgencies = _ => {
    return dispatch => {
      dispatch(requestedAgencies());
      return fetch(`http://webservices.nextbus.com/service/publicJSONFeed?command=agencyList`)
        .then(response => response.json())
        .then(json => dispatch(receivedAgencies(json.agency)));
    };
};
