import React from 'react';

import { createMap } from '../data/mapMaker';

import { getBusPosition } from '../data/nextBus';

class SFMap extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let busPositions;

        createMap();

        if (this.props.agencies.selectedRoutes.length) {
            return new Promise((resolve, reject) => {
               resolve(getBusPosition(this.props.agencies.selectedRoutes)); 
            })
            .then((value) => {
                console.log(value);
                return (
                    <div className="SFMapWrapper" id="map"></div>
                );
            }); 
                
        }

        return (
            <div className="SFMapWrapper" id="map"></div>
        );
    }
}

export default SFMap;