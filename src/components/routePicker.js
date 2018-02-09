import React from 'react';

import { getBusAgencies, getBusRoutes } from '../data/getBusData';

class RoutePicker extends React.Component {
    render() {
        /*let agencies = [];

        getBusAgencies()
            .then(function (value) {
                agencies = value;
            
                console.log(agencies);
            });*/
        
        return (
            <div className="RoutePickerWrapper">
                <div className="RoutePickerHeader">Select a route</div>
            </div>
        );
    }
}

export default RoutePicker;