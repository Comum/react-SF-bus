import React from 'react';

import { getBusAgencies, getBusRoutes } from '../data/getBusData';

import AgencyList from './agencyList';

class RoutePicker extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let headerTitle = '';

        if (this.props.agencies.agencyLoading === true) {
            headerTitle = 'Loading agencies';

            return (
                <div className="RoutePickerWrapper">
                    <div className="RoutePickerHeader">{headerTitle}</div>
                </div>
            );
        } else if (this.props.agencies.agencyLoading === false) {
            headerTitle = 'Select an agency';

            return (
                <div className="RoutePickerWrapper">
                    <div className="RoutePickerHeader">{headerTitle}</div>
                    <AgencyList {...this.props}/>
                </div>
            );
        }
    }
}

export default RoutePicker;