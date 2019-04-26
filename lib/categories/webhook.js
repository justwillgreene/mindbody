module.exports = function (client) {
    return{
        // https://mb-api.mindbodyonline.com/push/api/v1/subscriptions
        list: function (callback) {
            client.request({verb: 'GET', subd:'mb-api.', ext:'/push/api/v1', url: 'subscriptions'}, {}, callback);
        },
        // https://mb-api.mindbodyonline.com/push/api/v1/subscriptions
        create: function (details, callback) {
            client.request({verb: 'POST', subd:'mb-api.', ext:'/push/api/v1', url: 'subscriptions'}, {body: details}, callback);
        },
        // https://mb-api.mindbodyonline.com/push/api/v1/metrics
        metrics: function (callback) {
            client.request({verb: 'GET', subd:'mb-api.', ext:'/push/api/v1', url: 'metrics'}, {}, callback);
        },
        withID: function (id) {
            return {
                // https://mb-api.mindbodyonline.com/push/api/v1/subscriptions/SUBSCRIPTION
                self: function (callback) {
                    client.request({verb: 'GET', subd:'mb-api.', ext:'/push/api/v1', url: 'subscriptions/' + id}, {}, callback);
                },
                // https://mb-api.mindbodyonline.com/push/api/v1/subscriptions/SUBSCRIPTION
                update: function (details, callback) {
                    client.request({verb: 'PATCH', subd:'mb-api.', ext:'/push/api/v1', url: 'subscriptions/' + id}, {body: details}, callback);
                },
                // https://mb-api.mindbodyonline.com/push/api/v1/subscriptions/SUBSCRIPTION
                delete: function (callback) {
                    client.request({verb: 'DELETE', subd:'mb-api.', ext:'/push/api/v1', url: 'subscriptions/' + id}, {}, callback);
                },
            }
        }
    }
}