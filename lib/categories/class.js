const querystring = require("querystring");
module.exports = function (client) {
    return {
        // https://api.mindbodyonline.com/public/v6/class/classes
        classes: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "class/classes" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/class/classdescriptions
        classDescriptions: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "class/classdescriptions" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/class/classschedules
        classSchedules: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "class/classschedules" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/class/classvisits
        classVisits: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "class/classvisits" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/class/waitlistentries
        waitListEntries: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "class/waitlistentries" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/class/addclienttoclass  
        addClientToClass: function (details) {
            let url = "class/addclienttoclass"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/class/removeclientfromclass  
        removeClientFromClass: function (details) {
            let url = "class/removeclientfromclass"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/class/removefromwaitlist  
        removeFromWaitlist: function (details) {
            let url = "class/removefromwaitlist"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/class/substituteclassteacher  
        substituteClassTeacher: function (details) {
            let url = "class/substituteclassteacher"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        }


    };
};