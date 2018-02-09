function getJsonData(url) {
    return new Promise(function (resolve, reject) {
        $.getJSON('http://webservices.nextbus.com/service/publicJSONFeed?command=agencyList', function (data) {
            resolve(data);
        })
    });
}

module.exports = {
    getBusAgencies: function () {
        // return $.getJSON('http://webservices.nextbus.com/service/publicJSONFeed?command=agencyList', function(data) {
    
        return new Promise(function (resolve, reject) {
            getJsonData('./agencyList.json')
            .then(function (value) {
                let agencies = [];

                value.agency.forEach(function (agency, index) {
                    let name = agency.title;
                    let tag = agency.tag;

                    agencies.push({
                        name: name,
                        tag: tag
                    });
                });

                resolve(agencies);
            });
        });
    },
    getBusRoutes: function () {
        let agencies;

        getBusAgencies()
            .then(function (value) {
                agencies = value.agency;

                agencies.forEach(function (agency, index) {
                    let name = agency.title;
                    let tag = agency.tag;

                    // console.log(name, tage);
                });
            });
    }
};
