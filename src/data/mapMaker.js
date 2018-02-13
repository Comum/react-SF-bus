import * as d3 from 'd3';
import * as topojson from 'topojson';

// move this to routes initiator
let minLat = 1000;
let maxLat = -1000;
let minLon = 1000;
let maxLon = -1000;

function getLimits(data) {
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
    });
}

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
    getMapLimits: function () {
        return new Promise((resolve, reject) => {
            d3.json('./json/arteries.json', (err, data) => {
                getLimits(data);

                resolve();
            });
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                d3.json('./json/freeways.json', (err, data) => {
                    getLimits(data);

                    resolve();
                });
            })
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                d3.json('./json/streets.json', (err, data) => {
                    getLimits(data);

                    resolve();
                });
            })
        })
        .then(() => {
            return {
                minLat: minLat,
                minLon: minLon,
                maxLat: maxLat,
                maxLon: maxLon
            };
        });
    },
    createBus: function (selectedRoutes, limits) {
        selectedRoutes.forEach((route) => {
            let data = route.routesVehicles;

            console.log('vehicles', data, limits);
        });
    }
}