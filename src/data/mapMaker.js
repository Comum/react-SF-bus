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

function getColor(index) {
    switch(index) {
        case 0:
            return 'green'
        case 1:
            return 'blue'
        case 2:
            return 'red'
        default:
            return 'gray'
    }
}

module.exports = {
    createMap: function () {
        let el = document.getElementById('map');
        let width;
        let height;
        
        if (el) {
            width = el.clientWidth;
            height = el.clientHeight;

            if (el.children.length === 0) {
                let svg = d3.select('#map')
                    .append('svg')
                        .attr('id', 'svg')
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
        let svgEl = document.getElementById('svg');
        let width = svgEl.clientWidth;
        let height = svgEl.clientHeight;
        let color;

        let svg = d3.select('#svg');

        let yScale = d3.scaleLinear()
            .domain([limits.minLat, limits.maxLat])
            .range([height, 0]);

        let xScale = d3.scaleLinear()
            .domain([limits.minLon, limits.maxLon])
            .range([0, width]);

        selectedRoutes.forEach((route, index) => {
            let data = route.routesVehicles;

            let circles = svg
                .selectAll('.ball')
                .data(data)
                .enter()
                .append('g')
                .attr('class', 'ball')
                .attr('transform', d => {
                    return `translate(${xScale(d.lon)}, ${yScale(d.lat)})`;
                });
            
            color = getColor(index);
            
            circles
                .append('circle')
                .attr('cx', 0)
                .attr('cy', 0)
                .attr('r', 5)
                .style('fill-opacity', 0.5)
                .style('fill', color);

            // left to see if some bus are different than the test ones
            console.log('vehicle list', data);
        });
    }
}