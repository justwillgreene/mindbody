module.exports = function (client) {
    return{
        // https://api.mindbodyonline.com/public/v6/site/activationcode
            // *
        ActivationCode: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'site/activationcode'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/site/locations
        Locations: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'site/locations'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/site/programs
            // Query Parameters:
                // *ScheduleType:
                // *OnlineOnly:
        Programs: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'site/programs'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/site/resources
            // Query Parameters:
                // *SessionTypeIds:
                // *LocationId:
                // *StartDateTime:
                // *EndDateTime:
        Resources: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'site/resources'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/site/sessiontypes
            // Query Parameters:
                // *ProgramIds:
                // *OnlineOnly:
        SessionTypes: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'site/sessiontypes'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/site/sites
            // Query Parameters:
                // *SiteIds:
        Sites: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'site/sites'}, {query: query}, callback);
        }
    };
};