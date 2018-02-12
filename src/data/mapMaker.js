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

            console.log('mapMaker', data);
        });
    }
}