import React from 'react';

import { getBusAgencies, getBusRoutes } from '../data/getBusData';

class RoutePicker extends React.Component {
    render() {
        getBusRoutes();

        return (
            <div className="RoutePickerWrapper">
                <div className="RoutePickerHeader">Select a route</div>
            </div>
        );
    }
}

export default RoutePicker;