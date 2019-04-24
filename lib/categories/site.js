module.exports = function (client) {
    return{
        // https://api.mindbodyonline.com/public/v6/site/activationcode
            // *
        activationCode: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'site/activationcode'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'site/activationcode'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/site/locations
        locations: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'site/locations'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'site/locations'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/site/programs
            // Query Parameters:
                // *ScheduleType:
                // *OnlineOnly:
        programs: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'site/programs'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'site/programs'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/site/resources
            // Query Parameters:
                // *SessionTypeIds:
                // *LocationId:
                // *StartDateTime:
                // *EndDateTime:
        resources: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'site/resources'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'site/resources'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/site/sessiontypes
            // Query Parameters:
                // *ProgramIds:
                // *OnlineOnly:
        sessionTypes: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'site/sessiontypes'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'site/sessiontypes'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/site/sites
            // Query Parameters:
                // *SiteIds:
        sites: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'site/sites'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'site/sites'}, {}, callback);
            }
        }
    };
};