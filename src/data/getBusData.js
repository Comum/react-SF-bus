function getJsonData(url) {
    return new Promise(function (resolve, reject) {
        $.getJSON('./json/agencyList.json', function (data) {
            setTimeout(function () {
                resolve(data);
            }, 1000);
        })
    });
}

module.exports = {
    getBusAgencies: function () {
        // return $.getJSON('http://webservices.nextbus.com/service/publicJSONFeed?command=agencyList', function(data) {

        return new Promise(function (resolve, reject) {
            getJsonData('./agencyList.json')
            .then(function (value) {
                resolve(value);
            });
        });
    },
    getBusRoutes: function () {
        let agencies;

        module.exports.getBusAgencies()
            .then(function (value) {
                agencies = value;

                console.log('aqui', agencies);
            });
    }
};
