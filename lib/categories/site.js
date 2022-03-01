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
        memberships: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "site/memberships" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/site/programs
        programs: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "site/programs" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/site/promocodes
        promocodes: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "site/promocodes" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/site/resources
        resources: function (details, callback) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "site/resources" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/site/sessiontypes
        sessionTypes: function (details, callback) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "site/sessiontypes" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/site/sites
        sites: function (details, callback) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "site/sites" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/site/categories
        categories: function (details, callback) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "site/categories" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/site/paymenttypes
        paymentTypes: function (details, callback) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "site/paymenttypes" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/site/addpromocode  
        addPromoCode: function (details) {
            let url = "site/addpromocode"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },
    };
};