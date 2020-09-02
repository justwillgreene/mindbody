const querystring = require("querystring");
module.exports = function (client) {
    return {
        // https://api.mindbodyonline.com/public/v6/appointment/activesessiontimes
        // Query Parameters:
        // ScheduleType:
        // **Filters on the provided the schedule type. Either SessionTypeIds or ScheduleType must be provided. Possible values are:
        // **All
        // **Class
        // **Enrollment
        // **Appointment
        // **Resource
        // **Media
        // **Arrival
        // *SessionTypeIds:
        // *StartTime:
        // *EndTime:
        activeSessionTimes: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "appointment/activesessiontimes" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/appointment/addons
        // Query Parameters:
        // *StaffId
        appointmentAddOns: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "appointment/addons" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/appointment/availabledates
        // Query Parameters:
        // SessionTypeId
        // *LocationId
        // *StaffId
        // *StartDate
        // *EndDate
        appointmentAvailableDates: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "appointment/availabledates" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/appointment/appointmentoptions
        appointmentOptions: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "appointment/appointmentoptions" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/appointment/bookableitems
        // Query Parameters:
        // SessionTypeIds
        // *LocationIds
        // *StaffIds
        // *StartDate
        // *EndDate
        // *AppointmentId
        // *IgnoreDefaultSessionLength
        bookableItems: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "appointment/bookableitems" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/appointment/scheduleitems
        // Query Parameters:
        // *LocationIds
        // *StaffIds
        // *StartDate
        // *EndDate
        // *IgnorePrepFinishTimes
        scheduleItems: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "appointment/scheduleitems" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/appointment/staffappointments
        // Query Parameters:
        // *AppointmentIds
        // *LocationIds
        // *StartDate
        // *EndDate
        // *StaffIds
        // *ClientId
        staffAppointments: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "appointment/staffappointments" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/appointment/addappointment  
        addAppointment: function (details) {
            let url = "appointment/addappointment"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/appointment/addappointmentaddon  
        addAppointmentAddOn: function (details) {
            let url = "appointment/addappointmentaddon"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/appointment/updateappointment  
        updateAppointment: function (details) {
            let url = "appointment/updateappointment"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/appointment/deleteappointmentaddon  
        // Query Parameters:
        // Id
        deleteAppointmentAddOn: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "appointment/deleteappointmentaddon" + qs
            return client.request({ url: url }, { method: 'DELETE' })
        }

    };
};