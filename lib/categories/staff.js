module.exports = function (client) {
    return{
        // https://api.mindbodyonline.com/public/v6/staff/staff
            // Query Parameters:
                // *StaffIds:
                // *Filters:
                // *SessionTypeId:
                // *StartDateTime:
                // *LocationId:
        Staff: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'staff/staff'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/staff/staffpermissions
            // Query Parameters:
                // *StaffId:
        StaffPermissions: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'staff/staffpermissions'}, {query: query}, callback);
        },

    };
};