var MBO = require('../mindbody-sdk');

var mbo = new MBO({
    ApiKey: 'api-key',
    SiteId: 12345
});

// https://api.mindbodyonline.com/public/v6/usertoken/issue
mbo.usertoken.issue({
    'Username': '',
    'Password': ''
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });