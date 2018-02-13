import React from 'react';

import { createMap, createBus } from '../data/mapMaker';

class SFMap extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let busPositions;

        createMap();

        if (this.props.agencies.selectedRoutes.length) {
            createBus(this.props.agencies.selectedRoutes, this.props.agencies.coordinatesLimits);
        }

        return (
            <div className="SFMapWrapper" id="map"></div>
        );
    }
}

export default SFMap;