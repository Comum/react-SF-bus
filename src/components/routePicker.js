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
        console.log('routePicker', this.props);

        if (this.props.agencyLoading === true) {
            headerTitle = 'Loading agencies';

            return (
                <div className="RoutePickerWrapper">
                    <div className="RoutePickerHeader">{headerTitle}</div>
                </div>
            );
        } else if (this.props.agencyLoading === false) {
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