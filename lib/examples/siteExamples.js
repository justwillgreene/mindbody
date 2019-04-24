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

// https://api.mindbodyonline.com/public/v6/site/activationcode
mbo.site.activationcode(printResponse);

// https://api.mindbodyonline.com/public/v6/site/locations
mbo.site.locations(printResponse);

// https://api.mindbodyonline.com/public/v6/site/programs
mbo.site.programs(printResponse);
mbo.site.programs({
    'ScheduleType': 'string',
    'OnlineOnly': Boolean
},printResponse);

// https://api.mindbodyonline.com/public/v6/site/resources
mbo.site.resources(printResponse);
mbo.site.resources({
    'SessionTypeIds': 'list of numbers',
    'LocationId': Number,
    'StartDateTime': DateTime
},printResponse);

// https://api.mindbodyonline.com/public/v6/site/sessiontypes
mbo.site.sessionTypes(printResponse);
mbo.site.sessionTypes({
    'ProgramIds': 'list of numbers',
    'OnlineOnly': Boolean
},printResponse);

// https://api.mindbodyonline.com/public/v6/site/sites
mbo.site.sites(printResponse);
mbo.site.sites({
    'SiteIds': 'list of numbers'
},printResponse);

