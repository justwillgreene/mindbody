const MBO = require('../mindbody-sdk/lib/mindbody-sdk');

// WEBHOOKS API KEY IS DIFFERENT THAN PUBLIC API KEY
var mbo = new MBO({
    ApiKey: 'api-key'
});

let printResponse = (err,data) => {
    if (err) {
        console.log('SalesOHNO');
    } else {
        console.log(data);
    }
}

// https://mb-api.mindbodyonline.com/push/api/v1/subscriptions
mbo.webhook.list(printResponse);

// https://mb-api.mindbodyonline.com/push/api/v1/subscriptions
mbo.webhook.create({
    'eventIds': [
        'clientSaleCreated'
    ],
    'eventSchemaVersion': 1,
    'referenceId': 'GUID',
    'webhookUrl': 'https://something.com/endpoint'
},printResponse);

// https://mb-api.mindbodyonline.com/push/api/v1/metrics
mbo.webhook.metrics(printResponse);

// https://mb-api.mindbodyonline.com/push/api/v1/subscriptions/SUBSCRIPTION
mbo.webhook.withID('ID').self(printResponse);

// https://mb-api.mindbodyonline.com/push/api/v1/subscriptions/SUBSCRIPTION
mbo.webhook.withID('ID').update({
    'Status': 'Active',
    'WebhookUrl': 'https://something.com/endpoint'
},printResponse);

// https://mb-api.mindbodyonline.com/push/api/v1/subscriptions/SUBSCRIPTION
mbo.webhook.withID('ID').delete(printResponse);