module.exports = function (client) {
    return {
        // https://api.mindbodyonline.com/public/v6/usertoken/issue
        issue: function (details) {
            let url = "usertoken/issue";
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },
    };
};