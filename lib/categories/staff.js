module.exports = function (client) {
    return{
        // https://api.mindbodyonline.com/public/v6/staff/staff
            // Query Parameters:
                // *StaffIds:
                // *Filters:
                // *SessionTypeId:
                // *StartDateTime:
                // *LocationId:
        staff: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'staff/staff'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'staff/staff'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/staff/staffpermissions
            // Query Parameters:
                // *StaffId:
        staffPermissions: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'staff/staffpermissions'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'staff/staffpermissions'}, {}, callback);
            }
        },

    };
};