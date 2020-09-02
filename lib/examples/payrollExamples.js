var MBO = require('../mindbody-sdk');

var mbo = new MBO({
    ApiKey: 'api-key',
    SiteId: 12345
});

// https://api.mindbodyonline.com/public/v6/payroll/commissions
mbo.payroll.comissions()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/payroll/scheduledserviceearnings
mbo.payroll.scheduledServiceEarnings()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/payroll/timecards
mbo.payroll.timeCards()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/payroll/tips
mbo.payroll.tips()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });