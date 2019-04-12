module.exports = function (client) {
    return{
        // https://api.mindbodyonline.com/public/v6/usertoken/issue
        Issue: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'usertoken/issue'}, {query: query}, callback);
        },

    };
};