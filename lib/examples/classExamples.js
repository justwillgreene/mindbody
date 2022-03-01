var MBO = require('../mindbody-sdk');

var mbo = new MBO({
    ApiKey: 'api-key',
    SiteId: 12345
});

// https://api.mindbodyonline.com/public/v6/class/classes
mbo.class.classes()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.class.classes({
    'ClassDescriptionIds': 'list of numbers',
    'ClassIds': 'list of numbers',
    'StaffIds': 'list of numbers',
    'StartDateTime': DateTime,
    'EndDateTime': DateTime,
    'ClientId': 'string',
    'ProgramIds': 'list of numbers',
    'SessionTypeIds': 'list of numbers',
    'LocationIds': 'list of numbers',
    'SemesterIds': 'list of numbers',
    'HideCancelledClasses': 'nullable boolean',
    'SchedulingWindow': 'nullable boolean',
    'LastModifiedDate': DateTime
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/class/classdescriptions
mbo.class.classDescriptions()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.class.classDescriptions({
    'ClassDescriptionId': Number,
    'ProgramIds': 'list of numbers',
    'StartClassDateTime': DateTime,
    'EndClassDateTime': DateTime,
    'StaffId': Number,
    'LocationId': Number
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/class/classschedules
mbo.class.classSchedules({
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

// https://api.mindbodyonline.com/public/v6/class/classvisits
mbo.class.classVisits()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.class.classVisits({
    'LastModifiedDate': DateTime
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/class/waitlistentries
mbo.class.waitListEntries()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.class.waitListEntries({
    'ClassScheduleIds': 'list of numbers',
    'HidePastEntries': Boolean,
    'WaitlistEntryIds': 'list of numbers'
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/class/addclienttoclass  
mbo.class.addClientToClass({
    'ClientId': 'string',
    'ClassId': Number,
    'Test': 'nullable boolean',
    'RequirePayment': 'nullable boolean',
    'Waitlist': 'nullable boolean',
    'SendEmail': 'nullable boolean',
    'WaitlistEntryId': Number,
    'ClientServiceId': Number,
    'CrossRegionalBooking': Boolean,
    'CrossRegionalBookingClientServiceSiteID': Number
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/class/removeclientfromclass 
mbo.class.removeClientFromClass({
    'ClassId': Number,
    'Test': Boolean,
    'SendEmail': Boolean,
    'LateCancel': Boolean
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/class/removefromwaitlist 
mbo.class.removeFromWaitlist({
    'WaitlistEntryIds': 'list of numbers'
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/class/substituteclassteacher 
mbo.class.substitureClassTeacher({
    'ClassId': Number,
    'StaffId': Number,
    'OverrideConflicts': Boolean,
    'SendClientEmail': Boolean,
    'SendOriginalTeacherEmail': Boolean,
    'SendSubstituteTeacherEmail': Boolean
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });