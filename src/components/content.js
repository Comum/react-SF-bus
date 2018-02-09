import React from 'react';

import RouteSelected from './routeSelected';
import RoutePicker from './routePicker';
import SFMap from './SFMap';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="contentWrapper">
                <div className="contentMain">
                    <RouteSelected />
                    <SFMap />
                </div>
                <RoutePicker {...this.props}/>
            </div>
        );
    }
}

export default Content;