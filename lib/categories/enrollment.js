module.exports = function (client) {
    return{
        // https://api.mindbodyonline.com/public/v6/enrollment/enrollments
            // Query Parameters:
                // *ClassScheduleIds:
                // *EndDate:
                // *LocationIds:
                // *ProgramIds:
                // *SessionTypeIds:
                // *StaffIds:
                // *StartDate:
        enrollments: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'enrollment/enrollments'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'enrollment/enrollments'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/enrollment/addclienttoenrollment  
        addClientToEnrollment: function (details, callback) {
            client.request({verb: 'POST', url: 'enrollment/addclienttoenrollment'}, {body: details}, callback);
        },

    };
};