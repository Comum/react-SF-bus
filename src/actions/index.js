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

const saveAgencyRoute = createAction(agencyActions.SAVE_AGENCY_ROUTE);
export const pickAgencyRoutes = (routeTag, routeName, agencyTag, agencyName) => {
    return dispatch => {
        dispatch(saveAgencyRoute({routeTag: routeTag, routeName: routeName, agencyTag: agencyTag, agencyName: agencyName}));
    }
}

const requestedAgencyRoutes = createAction(agencyActions.AGENCY_ROUTES_REQUESTED);
const receivedProductRange = createAction(agencyActions.AGENCY_ROUTES_RECEIVED);
export const getAgencyRoutes = (agencyTag, agencyName) => {
    return dispatch => {
        dispatch(requestedAgencyRoutes({agencyTag: agencyTag, agencyName: agencyName}));
        return fetch(`http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=${agencyTag}`)
            .then(response => response.json())
            .then(json => dispatch(receivedProductRange(json)))
    }
}

export const receivedAgencies = createAction(agencyActions.AGENCY_LIST_RECEIVED);

const requestedAgencies = createAction(agencyActions.AGENCY_LIST_REQUESTED);
export const receiveBusAgencies = _ => {
    return dispatch => {
      dispatch(requestedAgencies());
      return fetch(`http://webservices.nextbus.com/service/publicJSONFeed?command=agencyList`)
        .then(response => response.json())
        .then(json => {
            let _this;
            let agenciesRoutes = {
                agency: [],
                copyright: json.copyright
            };

            return new Promise((resolve, reject) => {
                json.agency.forEach((agency, index) => {
                    _this = json.agency;
                    fetch(`http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=${agency.tag}`)
                        .then(response => response.json())
                        .then(json => {
                            agenciesRoutes.agency.push({
                                regionTitle: agency.regionTitle,
                                tag: agency.tag,
                                title: agency.title,
                                routes: json
                            });

                            if (index === _this.length - 1) {
                                resolve();
                            }
                        });
                });
            })
            .then(() => {
                dispatch(receivedAgencies(agenciesRoutes));
            });
        });
    };
};
