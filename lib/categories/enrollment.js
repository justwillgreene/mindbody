const querystring = require("querystring");
module.exports = function (client) {
    return {
        // https://api.mindbodyonline.com/public/v6/enrollment/enrollments
        // Query Parameters:
        // *ClassScheduleIds:
        // *EndDate:
        // *LocationIds:
        // *ProgramIds:
        // *SessionTypeIds:
        // *StaffIds:
        // *StartDate:
        enrollments: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "enrollments/enrollments" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/enrollment/addclienttoenrollment  
        addClientToEnrollment: function (details) {
            let url = "enrollment/addclienttoenrollment"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

    };
};