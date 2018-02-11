import fetch from 'cross-fetch';

module.exports = {
    getBusPosition: function (selectedRoutes) {
        let busPositions = [];

        selectedRoutes.forEach((route) => {
            let currentTime = new Date().getTime();
            let url = `http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=${route.agencyExpanded}&r=${route.pickedRouteTag}&t=${currentTime}`;

            return new Promise((resolve, reject) => {
                fetch(url)
                    .then(response => response.json())
                    .then((json) => {
                        return new Promise((resolve, reject) => {
                            if (json.vehicle) {
                                resolve(json.vehicle);
                            } else {
                                // remove after testing
                                fetch('./json/busExample.json')
                                    .then(response => response.json())
                                    .then((json) => {
                                        resolve(json);
                                    })
                            }
                        });
                    })
                    .then((value) => {
                        resolve(value);
                    });
            });
        });
    }
}