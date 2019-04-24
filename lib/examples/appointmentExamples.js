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

// https://api.mindbodyonline.com/public/v6/appointment/activesessiontimes
mbo.appointment.activeSessionTimes(printResponse);

// https://api.mindbodyonline.com/public/v6/appointment/appointmentoptions
mbo.appointment.appointmentOptions(printResponse);

// https://api.mindbodyonline.com/public/v6/appointment/bookableitems
mbo.appointment.bookableItems(printResponse);

// https://api.mindbodyonline.com/public/v6/appointment/scheduleitems
mbo.appointment.scheduleItems(printResponse);

// https://api.mindbodyonline.com/public/v6/appointment/staffappointments  
mbo.appointment.staffAppointments(printResponse);

// https://api.mindbodyonline.com/public/v6/appointment/addappointment 
mbo.appointment.addAppointment({
    'ApplyPayment': boolean,
    'ClientId': 'string',
    'Duration': number,
    'Execute': 'string',
    'EndDateTime': DateTime,
    'GenderPreference': 'string',
    'LocationId': number,
    'Notes': 'string',
    'ProviderId': 'string',
    'ResourceIds': 'list of numbers',
    'SendEmail': boolean,
    'SessionTypeId': number,
    'StaffId': number,
    'StaffRequested': boolean,
    'StartDateTime': DateTime
},printResponse);

// https://api.mindbodyonline.com/public/v6/appointment/updateappointment 
mbo.appointment.updateAppointment({
    'AppointmentId': number,
    'EndDateTime': DateTime,
    'Execute': 'string',
    'GenderPreference': 'string',
    'Notes': 'string',
    'ProviderId': 'string',
    'ResourceIds': 'list of numbers',
    'SendEmail': boolean,
    'SessionTypeId': number,
    'StaffId': number,
    'StartDateTime': DateTime,
    'Test': boolean
},printResponse);