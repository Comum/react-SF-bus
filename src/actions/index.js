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
        let currentTime = new Date().getTime();
        let url = `http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=${agencyTag}&r=${routeTag}&t=${currentTime}`;

        return fetch(url)
            .then(response => response.json())
            .then(json => {
                // if statement just for testing purposes
                if (!json.vehicle) {
                    fetch('./json/busExample.json')
                        .then(response => response.json())
                        .then((json) => {
                            dispatch(saveAgencyRoute({routeTag: routeTag, routeName: routeName, agencyTag: agencyTag, agencyName: agencyName, busRoutes: json}));
                        })
                } else {
                    dispatch(saveAgencyRoute({routeTag: routeTag, routeName: routeName, agencyTag: agencyTag, agencyName: agencyName, busRoutes: json}));
                }
            });
    }
}

// Deliberatly left behind
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
            let agenciesRoutes = {
                agency: [],
                copyright: json.copyright
            };
            let numAgencies = json.agency.length;

            return new Promise((resolve, reject) => {
                json.agency.forEach((agency, index) => {
                    fetch(`http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=${agency.tag}`)
                        .then(response => response.json())
                        .then(routes => {
                            agenciesRoutes.agency.push({
                                regionTitle: agency.regionTitle,
                                tag: agency.tag,
                                title: agency.title,
                                routes: routes
                            });

                            if (index ===  numAgencies - 1) {
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
