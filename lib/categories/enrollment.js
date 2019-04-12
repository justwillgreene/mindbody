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
        Enrollments: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'enrollment/enrollments'}, {query: query}, callback);
        }

    };
};