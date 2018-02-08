import React from 'react';

import RouteSelected from '../components/routeSelected';
import RoutePicker from '../components/routePicker';
import SFMap from '../components/SFMap';

class Content extends React.Component {
    render() {
        return (
            <div className="contentWrapper">
                <div className="contentMain">
                    <RouteSelected />
                    <SFMap />
                </div>
                <RoutePicker />
            </div>
        );
    }
}

export default Content;