const querystring = require("querystring");
module.exports = function (client) {
    return {
        // https://api.mindbodyonline.com/public/v6/site/activationcode
        activationCode: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "site/activationcode" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/site/genders
        genders: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "site/genders" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/site/locations
        locations: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "site/locations" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/site/memberships
        // Query Parameters:
        // MembershipIds
        memberships: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "site/memberships" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/site/programs
        // Query Parameters:
        // *ScheduleType:
        // *OnlineOnly:
        programs: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "site/programs" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/site/resources
        // Query Parameters:
        // *SessionTypeIds:
        // *LocationId:
        // *StartDateTime:
        // *EndDateTime:
        resources: function (details, callback) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "site/resources" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/site/sessiontypes
        // Query Parameters:
        // *ProgramIds:
        // *OnlineOnly:
        sessionTypes: function (details, callback) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "site/sessiontypes" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/site/sites
        // Query Parameters:
        // *SiteIds:
        sites: function (details, callback) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "site/sites" + qs
            return client.request({ url: url }, { method: 'GET' })
        }
    };
};