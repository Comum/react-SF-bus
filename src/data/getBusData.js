module.exports = {
    getBusAgencies: function () {
        let agencies;
        
        $.getJSON('http://webservices.nextbus.com/service/publicJSONFeed?command=agencyList', function(data) {
            agencies = data.agency;
        });

        return agencies;
    },
    getBusRoutes: function () {
        let agencies = module.exports.getBusAgencies();

        console.log(agencies);
    }
};
