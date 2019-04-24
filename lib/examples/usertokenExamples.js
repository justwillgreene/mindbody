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

// https://api.mindbodyonline.com/public/v6/usertoken/issue
mbo.usertoken.issue({
    'Username': '', 
    'Password': ''
}, printClasses);