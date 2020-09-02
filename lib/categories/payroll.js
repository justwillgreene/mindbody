const querystring = require("querystring");
module.exports = function (client) {
    return {
        // https://api.mindbodyonline.com/public/v6/payroll/commissions
        // Query Parameters:
        // *StaffId
        // *StartDateTime
        // *EndDateTime
        // *LocationId
        commissions: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "payroll/commissions" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/payroll/scheduledserviceearnings
        // Query Parameters:
        // *ScheduledServiceType
        // *ScheduledServiceId
        // *StaffId
        // *StartDateTime
        // *EndDateTime
        // *LocationId
        scheduledServiceEarnings: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "payroll/scheduledserviceearnings" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/payroll/timecards
        // Query Parameters:
        // *StaffId
        // *StartDateTime
        // *EndDateTime
        // *LocationId
        timeCards: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "payroll/timecards" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/payroll/tips
        // Query Parameters:
        // *StaffId
        // *StartDateTime
        // *EndDateTime
        // *LocationId
        tips: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "payroll/tips" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
    };
};