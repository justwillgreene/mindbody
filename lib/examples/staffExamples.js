var MBO = require('../mindbody-sdk');

var mbo = new MBO({
    ApiKey: 'api-key',
    SiteId: 12345
});

// https://api.mindbodyonline.com/public/v6/staff/staff
mbo.staff.staff()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.staff.staff({
    'StaffIds': 'list of numbers',
    'Filters': 'list of strings',
    'SessionTypeId': Number,
    'StartDateTime': DateTime,
    'LocationId': Number
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/staff/staffpermissions
mbo.staff.permissions()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.staff.permissions({
    'StaffId': Number
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/staff/imageurl
mbo.staff.imageUrl()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/staff/imageurl
mbo.staff.imageUrl()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/staff/sessiontypes
mbo.staff.sessionTypes()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/staff/addstaff 
mbo.staff.addStaff({})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/staff/assignsessiontype 
mbo.staff.addStaffAvailability({})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/staff/updatestaff 
mbo.staff.updateStaff({})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/staff/updatestaffpermissions 
mbo.staff.updateStaffPermissions({})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });