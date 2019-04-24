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
        classes: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'class/classes'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'class/classes'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/class/classdescriptions
            // Query Parameters:
                // *ClassDescriptionId:
                // *ProgramIds:
                // *StartClassDateTime:
                // *EndClassDateTime:
                // *StaffId:
                // *LocationId:
        classDescriptions: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'class/classdescriptions'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'class/classdescriptions'}, {}, callback);
            }
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
        classSchedules: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'class/classschedules'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'class/classschedules'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/class/classvisits
            // Query Parameters:
                // *ClassID:
                // *LastModifiedDate:
        classVisits: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'class/classvisits'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'class/classvisits'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/class/waitlistentries
            // Query Parameters:
                // *ClassIds:
                // *ClassScheduleIds:
                // *ClientIds:
                // *HidePastEntries:
                // *WaitlistEntryIds:
        waitListEntries: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'class/waitlistentries'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'class/waitlistentries'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/class/addclienttoclass  
        addClientToClass: function (details, callback) {
            client.request({verb: 'POST', url: 'class/addclienttoclass'}, {body: details}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/class/removeclientfromclass  
        removeClientFromClass: function (details, callback) {
            client.request({verb: 'POST', url: 'class/removeclientfromclass'}, {body: details}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/class/removefromwaitlist  
        removeFromWaitlist: function (details, callback) {
            client.request({verb: 'POST', url: 'class/removefromwaitlist'}, {body: details}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/class/substituteclassteacher  
        substituteClassTeacher: function (details, callback) {
            client.request({verb: 'POST', url: 'class/substituteclassteacher'}, {body: details}, callback);
        }


    };
};