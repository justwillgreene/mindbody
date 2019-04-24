var MBO = require('../mindbody-sdk');

var mbo = new MBO({
    ApiKey: 'api-key',
    SiteId: 12345
});

let printResponse = (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

// https://api.mindbodyonline.com/public/v6/staff/staff
mbo.staff.staff(printResponse);
mbo.staff.staff({
    'StaffIds': 'list of numbers',
    'Filters': 'list of strings',
    'SessionTypeId': Number,
    'StartDateTime': DateTime,
    'LocationId': Number
},printResponse);

// https://api.mindbodyonline.com/public/v6/staff/staffpermissions
mbo.staff.staffPermissions(printResponse);
mbo.staff.staffPermissions({
    'StaffId': Number
},printResponse);