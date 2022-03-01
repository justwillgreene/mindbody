// const querystring = require("querystring");
module.exports = function (client) {
    return {
        // https://api.mindbodyonline.com/public/v6/pricingoption/updatepricingoption  
        updatePricingOption: function (details) {
            let url = "pricingoption/updatepricingoption"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

    };
};