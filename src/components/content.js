import React from 'react';

import RouteSelected from './routeSelected';
import RoutePicker from './routePicker';
import SFMap from './SFMap';

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