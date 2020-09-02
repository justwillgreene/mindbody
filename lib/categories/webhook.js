const querystring = require("querystring");
module.exports = function (client) {
    return {
        // https://mb-api.mindbodyonline.com/push/api/v1/subscriptions
        list: function () {
            let url = "subscriptions"
            return client.request({ subd: 'mb-api.', ext: '/push/api/v1', url: url }, { method: 'GET' })
        },
        // https://mb-api.mindbodyonline.com/push/api/v1/subscriptions
        create: function (details) {
            let url = "subscriptions"
            return client.request({ subd: 'mb-api.', ext: '/push/api/v1', url: url }, { method: 'POST', body: JSON.stringify(body) })
        },
        // https://mb-api.mindbodyonline.com/push/api/v1/metrics
        metrics: function () {
            let url = "metrics"
            return client.request({ subd: 'mb-api.', ext: '/push/api/v1', url: url }, { method: 'GET' })
        },
        withID: function (id) {
            return {
                // https://mb-api.mindbodyonline.com/push/api/v1/subscriptions/SUBSCRIPTION
                self: function () {
                    let url = "subscriptions/" + id
                    return client.request({ subd: 'mb-api.', ext: '/push/api/v1', url: url }, { method: 'GET' })
                },
                // https://mb-api.mindbodyonline.com/push/api/v1/subscriptions/SUBSCRIPTION
                update: function (details) {
                    let url = "subscriptions/" + id
                    return client.request({ subd: 'mb-api.', ext: '/push/api/v1', url: url }, { method: 'POST', body: JSON.stringify(details) })
                },
                // https://mb-api.mindbodyonline.com/push/api/v1/subscriptions/SUBSCRIPTION
                delete: function () {
                    let url = "subscriptions/" + id
                    return client.request({ subd: 'mb-api.', ext: '/push/api/v1', url: url }, { method: 'DELETE' })
                },
            }
        }
    }
}