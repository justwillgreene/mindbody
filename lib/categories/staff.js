const querystring = require("querystring");
module.exports = function (client) {
  return {
    // https://api.mindbodyonline.com/public/v6/staff/staff
    // Query Parameters:
    // *StaffIds:
    // *Filters:
    // *SessionTypeId:
    // *StartDateTime:
    // *LocationId:
    staff: function (details) {
      let qs = details ? "?" + querystring.stringify(details) : ""

      let url = "/staff/staff" + qs
      return client.request({ url: url }, { method: 'GET' })
    },

    // https://api.mindbodyonline.com/public/v6/staff/staffpermissions
    // Query Parameters:
    // *StaffId:
    staffPermissions: function (details) {
      let qs = details ? "?" + querystring.stringify(details) : ""

      let url = "/staff/staffpermissions" + qs
      return client.request({ url: url }, { method: 'GET' })
    },
  };
};
