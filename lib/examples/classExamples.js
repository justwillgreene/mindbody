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

// https://api.mindbodyonline.com/public/v6/class/classes
mbo.class.classes(printResponse);
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
},printResponse);

// https://api.mindbodyonline.com/public/v6/class/classdescriptions
mbo.class.classDescriptions(printResponse);
mbo.class.classDescriptions({
    'ClassDescriptionId': Number,
    'ProgramIds': 'list of numbers',
    'StartClassDateTime': DateTime,
    'EndClassDateTime': DateTime,
    'StaffId': Number,
    'LocationId': Number
},printResponse);

// https://api.mindbodyonline.com/public/v6/class/classschedules
mbo.class.classSchedules(printResponse);
mbo.class.classSchedules({
    'EndDate': DateTime,
    'LocationIds': 'list of numbers',
    'ProgramIds': 'list of numbers',
    'SessionTypeIds': 'list of numbers',
    'StaffIds': 'list of numbers',
    'StartDate': DateTime
},printResponse);

// https://api.mindbodyonline.com/public/v6/class/classvisits
mbo.class.classVisits(printResponse);
mbo.class.classVisits({
    'LastModifiedDate': DateTime
},printResponse);

// https://api.mindbodyonline.com/public/v6/class/waitlistentries
mbo.class.waitListEntries(printResponse);
mbo.class.waitListEntries({
    'ClassScheduleIds': 'list of numbers',
    'HidePastEntries': Boolean,
    'WaitlistEntryIds': 'list of numbers'
},printResponse);

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
},printResponse);

// https://api.mindbodyonline.com/public/v6/class/removeclientfromclass 
mbo.class.removeClientFromClass({
    'ClassId': Number,
    'Test': Boolean,
    'SendEmail': Boolean,
    'LateCancel': Boolean
},printResponse);

// https://api.mindbodyonline.com/public/v6/class/removefromwaitlist 
mbo.class.removeFromWaitlist({
    'WaitlistEntryIds': 'list of numbers'
},printResponse);

// https://api.mindbodyonline.com/public/v6/class/substituteclassteacher 
mbo.class.substitureClassTeacher({
    'ClassId': Number,
    'StaffId': Number,
    'OverrideConflicts': Boolean,
    'SendClientEmail': Boolean,
    'SendOriginalTeacherEmail': Boolean,
    'SendSubstituteTeacherEmail': Boolean
},printResponse);