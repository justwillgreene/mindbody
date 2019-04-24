module.exports = function (client) {
    return{
        // https://api.mindbodyonline.com/public/v6/appointment/activesessiontimes
        activeSessionTimes: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'appointment/activesessiontimes'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'appointment/activesessiontimes'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/appointment/appointmentoptions
        appointmentOptions: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'appointment/appointmentoptions'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'appointment/appointmentoptions'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/appointment/bookableitems
        bookableItems: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'appointment/bookableitems'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'appointment/bookableitems'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/appointment/scheduleitems
        scheduleItems: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'appointment/scheduleitems'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'appointment/scheduleitems'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/appointment/staffappointments        
        staffAppointments: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'appointment/staffappointments'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'appointment/staffappointments'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/appointment/addappointment  
        addAppointment: function (details, callback) {
            client.request({verb: 'POST', url: 'appointment/staffappointments'}, {body: details}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/appointment/updateappointment  
        updateAppointment: function (details, callback) {
            client.request({verb: 'POST', url: 'appointment/updateappointment'}, {body: details}, callback);
        }

    };
};