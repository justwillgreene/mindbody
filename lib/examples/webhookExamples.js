const MBO = require('../mindbody-sdk/lib/mindbody-sdk');

// WEBHOOKS API KEY IS DIFFERENT THAN PUBLIC API KEY
var mbo = new MBO({
    ApiKey: 'api-key'
});

// https://mb-api.mindbodyonline.com/push/api/v1/subscriptions
mbo.webhook.list()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://mb-api.mindbodyonline.com/push/api/v1/subscriptions
mbo.webhook.create({
    'eventIds': [
        'clientSaleCreated'
    ],
    'eventSchemaVersion': 1,
    'referenceId': 'GUID',
    'webhookUrl': 'https://something.com/endpoint'
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://mb-api.mindbodyonline.com/push/api/v1/metrics
mbo.webhook.metrics()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://mb-api.mindbodyonline.com/push/api/v1/subscriptions/SUBSCRIPTION
mbo.webhook.withID('ID').self()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://mb-api.mindbodyonline.com/push/api/v1/subscriptions/SUBSCRIPTION
mbo.webhook.withID('ID').update({
    'Status': 'Active',
    'WebhookUrl': 'https://something.com/endpoint'
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://mb-api.mindbodyonline.com/push/api/v1/subscriptions/SUBSCRIPTION
mbo.webhook.withID('ID').delete()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });