import React from 'react';

import { createMap } from '../data/mapMaker';

class SFMap extends React.Component {
    render() {
        createMap();

        return (
            <div className="SFMapWrapper" id="map"></div>
        );
    }
}

export default SFMap;