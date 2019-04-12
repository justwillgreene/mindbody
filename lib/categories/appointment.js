module.exports = function (client) {
    return{
        // https://api.mindbodyonline.com/public/v6/appointment/activesessiontimes
            // Query Parameters:
                // ScheduleType: 
                    // string
                    // Filters on the provided the schedule type. Either SessionTypeIds or ScheduleType must be provided. Possible values are:
                        // All; Class; Enrollment; Appointment; Resource; Media; Arrival
                // SessionTypeIds: 
                    // listofnumbers
                    // Filters on the provided session type IDs. Either SessionTypeIds or ScheduleType must be provided.
                // *StartTime: 
                    // string
                    // Filters results to times that start on or after this time on the current date. Any date provided is ignored. Default: 00:00:00
                // *EndTime: 
                    // string
                    // Filters results to times that end on or before this time on the current date. Any date provided is ignored. Default: 23:59:59
        ActiveSessionTimes: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'appointment/activesessiontimes'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/appointment/appointmentoptions
            // This endpoint has no query parameters.
        AppointmentOptions: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'appointment/appointmentoptions'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/appointment/bookableitems
            // Query Parameters:
                // *SessionTypeIds: 
                    // listofnumbers
                    // Filters on the provided session type IDs. Either SessionTypeIds or ScheduleType must be provided.
                // *LocationIds: 
                    // listofnumbers
                    // A list of the requested location IDs.
                // *StaffIds:
                    // listofnumbers
                    // A list of requested staff IDs.
                // *StartDate: 
                    // DateTime
                    // The start date of the requested date range. Default: today’s date
                // *EndDate: 
                    // DateTime
                    // The end date of the requested date range. Default: StartDate
                // *AppointmentId:
                    // number
                    // If provided, filters out the appointment with this ID.
                // *IgnoreDefaultSessionLength:
                    // boolean
                    // When true, availabilities that are nondefault return, for example, a 30-minute availability with a 60-minute default session length. When false, only availabilities that have the default session length return.
        BookableItems: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'appointment/bookableitems'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/appointment/scheduleitems
            // Query Parameters:
                // *LocationIds: 
                    // listofnumbers
                    // A list of the requested location IDs.
                // *StaffIds:
                    // listofnumbers
                    // A list of requested staff IDs.
                // *StartDate: 
                    // DateTime
                    // The start date of the requested date range. Default: today’s date
                // *EndDate: 
                    // DateTime
                    // The end date of the requested date range. Default: today's date
                // *IgnorePrepFinishTimes:
                    // boolean
                    // When true, appointment preparation and finish unavailabilities are not returned. Default: false
        ScheduleItems: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'appointment/scheduleitems'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/appointment/staffappointments
            // Query Parameters:  This endpoint supports pagination. See Pagination for a description of the Pagination information.
                // *AppointmentIds:
                    // listofnumbers
                    // A list of the requested appointment IDs.
                // *LocationIds: 
                    // listofnumbers
                    // A list of the requested location IDs.
                // *StartDate: 
                    // DateTime
                    // The start date of the requested date range. Default: today’s date
                // *EndDate: 
                    // DateTime
                    // The end date of the requested date range. Default: StartDate
                // *ClientIds
                    // listofnumbers
                    // List of client IDs to be returned                
        StaffAppointments: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'appointment/staffappointments'}, {query: query}, callback);
        },

    };
};