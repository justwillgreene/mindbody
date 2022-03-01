const querystring = require("querystring");
module.exports = function (client) {
  return {
    // https://api.mindbodyonline.com/public/v6/staff/staff
    staff: function (details) {
      let qs = details ? "?" + querystring.stringify(details) : ""
      let url = "staff/staff" + qs
      return client.request({ url: url }, { method: 'GET' })
    },

    // https://api.mindbodyonline.com/public/v6/staff/staffpermissions
    permissions: function (details) {
      let qs = details ? "?" + querystring.stringify(details) : ""
      let url = "staff/staffpermissions" + qs
      return client.request({ url: url }, { method: 'GET' })
    },

    // https://api.mindbodyonline.com/public/v6/staff/imageurl
    imageUrl: function (details) {
      let qs = details ? "?" + querystring.stringify(details) : ""
      let url = "staff/imageurl" + qs
      return client.request({ url: url }, { method: 'GET' })
    },

    // https://api.mindbodyonline.com/public/v6/staff/sessiontypes
    sessionTypes: function (details) {
      let qs = details ? "?" + querystring.stringify(details) : ""
      let url = "staff/sessiontypes" + qs
      return client.request({ url: url }, { method: 'GET' })
    },

    // https://api.mindbodyonline.com/public/v6/staff/addstaff  
    addStaff: function (details) {
      let url = "staff/addstaff"
      return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
    },

    // https://api.mindbodyonline.com/public/v6/staff/availability  
    addStaffAvailability: function (details) {
      let url = "staff/availability"
      return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
    },

    // https://api.mindbodyonline.com/public/v6/staff/assignsessiontype  
    assignStaffSessionType: function (details) {
      let url = "staff/assignsessiontype"
      return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
    },

    // https://api.mindbodyonline.com/public/v6/staff/updatestaff  
    updateStaff: function (details) {
      let url = "staff/updatestaff"
      return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
    },

    // https://api.mindbodyonline.com/public/v6/staff/updatestaffpermissions  
    updateStaffPermissions: function (details) {
      let url = "staff/updatestaffpermissions"
      return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
    },
  };
};
