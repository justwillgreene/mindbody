var MBO = require('../mindbody-sdk');

var mbo = new MBO({
    ApiKey: 'api-key',
    SiteId: 12345
});

// https://api.mindbodyonline.com/public/v6/appointment/activesessiontimes
mbo.appointment.activeSessionTimes({ 'ScheduleType': 'All' })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })

// https://api.mindbodyonline.com/public/v6/appointment/appointmentoptions
mbo.appointment.appointmentOptions()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/appointment/bookableitems
mbo.appointment.bookableItems()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/appointment/scheduleitems
mbo.appointment.scheduleItems()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/appointment/staffappointments  
mbo.appointment.staffAppointments()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

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
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

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
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });