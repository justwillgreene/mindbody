module.exports = function (client) {
    return{
        // https://api.mindbodyonline.com/public/v6/class/classes
            // Query Parameters:
                // *ClassDescriptionIds:
                // *ClassIds:
                // *StaffIds:
                // *StartDateTime:
                // *EndDateTime:
                // *ClientId:
                // *ProgramIds:
                // *SessionTypeIds:
                // *LocationIds:
                // *SemesterIds:
                // *HideCanceled:
                // *SchedulingWindow:
                // *LastModifiedDate:
        Classes: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'class/classes'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/class/classdescriptions
            // Query Parameters:
                // *ClassDescriptionId:
                // *ProgramIds:
                // *StartClassDateTime:
                // *EndClassDateTime:
                // *StaffId:
                // *LocationId:
        ClassDescriptions: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'class/classdescriptions'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/class/classschedules
            // Query Parameters:
                // *ClassScheduleIds:
                // *EndDate:
                // *LocationIds:
                // *ProgramIds:
                // *SessionTypeIds:
                // *StaffIds:
                // *StartDate:
        ClassSchedules: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'class/classschedules'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/class/classvisits
            // Query Parameters:
                // *ClassID:
                // *LastModifiedDate:
        ClassVisits: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'class/classvisits'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/class/waitlistentries
            // Query Parameters:
                // *ClassIds:
                // *ClassScheduleIds:
                // *ClientIds:
                // *HidePastEntries:
                // *WaitlistEntryIds:
        WaitListEntries: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'class/waitlistentries'}, {query: query}, callback);
        }


    };
};