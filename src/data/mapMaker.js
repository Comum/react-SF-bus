import * as d3 from 'd3';
import * as topojson from 'topojson';

module.exports = {
    createMap: function () {
        let el = document.getElementById('map');
        let width;
        let height;
        
        if (el) {
            width = el.clientWidth;
            height = el.clientHeight;

            console.log('works', width, height);

            if (el.children.length === 0) {
                let svg = d3.select('#map')
                    .append('svg')
                        .attr('width', width)
                        .attr('height', height);
            }
        }
    },
    createBus: function (selectedRoutes) {
        selectedRoutes.forEach((route) => {
            let data = route.routesVehicles;

            // move this to createMap
            let minLat = 1000;
            let maxLat = -1000;
            let minLon = 1000;
            let maxLon = -1000; 

            d3.json('./json/streets.json', (err, data) => {
                data.features.forEach((route) => {
                    route.geometry.coordinates.forEach((coordinate) => {
                        if (coordinate[0] > maxLon) {
                            maxLon = coordinate[0];
                        }

                        if (coordinate[0] < minLon) {
                            minLon = coordinate[0];
                        }

                        if (coordinate[1] > maxLat) {
                            maxLat = coordinate[1];
                        }

                        if (coordinate[1] < minLat) {
                            minLat = coordinate[1];
                        }
                    });
                    // console.log('streets', route.geometry.coordinates);
                });

                console.log('fim', minLat, minLon, maxLat, maxLon);
            });

            console.log('mapMaker', data);
        });
    }
}