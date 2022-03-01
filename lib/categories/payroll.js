const querystring = require("querystring");
module.exports = function (client) {
    return {
        // https://api.mindbodyonline.com/public/v6/payroll/commissions
        commissions: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "payroll/commissions" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/payroll/scheduledserviceearnings
        scheduledServiceEarnings: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "payroll/scheduledserviceearnings" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/payroll/timecards
        timeCards: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "payroll/timecards" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/payroll/tips
        tips: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "payroll/tips" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
    };
};