module.exports = function (client) {
    return{
        // https://api.mindbodyonline.com/public/v6/usertoken/issue
        Issue: function (details, callback) {
            client.request({verb: 'POST', url: 'usertoken/issue'}, {body: details}, callback);
          },

    };
};