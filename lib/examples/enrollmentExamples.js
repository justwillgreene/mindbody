var MBO = require('../mindbody-sdk');

var mbo = new MBO({
    ApiKey: 'api-key',
    SiteId: 12345
});

// https://api.mindbodyonline.com/public/v6/enrollment/enrollments
mbo.enrollment.enrollments()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.enrollment.enrollments({
    'ClassScheduleIds': 'list of numbers',
    'EndDate': DateTime,
    'LocationIds': 'list of numbers',
    'ProgramIds': 'list of numbers',
    'SessionTypeIds': 'list of numbers',
    'StaffIds': 'list of numbers',
    'StartDate': DateTime
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/enrollment/addclienttoenrollment  
mbo.enrollment.addClientToEnrollment({
    'ClientId': 'string',
    'ClassScheduleId': Number,
    'EnrollDateForward': DateTime,
    'EnrollOpen': 'DateTime list',
    'Test': 'nullable boolean',
    'SendEmail': 'nullable boolean',
    'Waitlist': 'nullable boolean',
    'WaitlistEntryId': Number
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });