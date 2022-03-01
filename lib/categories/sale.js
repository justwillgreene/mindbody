const querystring = require("querystring");
module.exports = function (client) {
    return {
        // https://api.mindbodyonline.com/public/v6/sale/acceptedcardtypes
        acceptedCardTypes: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "sale/acceptedcardtypes" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/sale/contracts
        contracts: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "sale/contracts" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/sale/custompaymentmethods
        customPaymentMethods: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "sale/custompaymentmethods" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/sale/giftcardbalance
        giftCardBalance: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "sale/giftcardbalance" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/sale/giftcards
        giftCards: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "sale/giftcards" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/sale/packages
        packages: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "sale/packages" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/sale/products
        products: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "sale/products" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/sale/productsinventory
        productsInventory: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "sale/productsinventory" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/sale/sales
        sales: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "sale/sales" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/sale/services
        services: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "sale/services" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/sale/transactions
        transactions: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "sale/transactions" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/sale/checkoutshoppingcart  
        checkoutShoppingCart: function (details) {
            let url = "sale/checkoutshoppingcart"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/sale/purchaseaccountcredit
        purchaseAccountCredit: function (details) {
            let url = "sale/purchaseaccountcredit"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/sale/purchasecontract  
        purchaseContract: function (details) {
            let url = "sale/purchasecontract"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/sale/purchasegiftcard  
        purchaseGiftCard: function (details) {
            let url = "sale/purchasegiftcard"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/sale/updateproductprice  
        updateProductPrice: function (details) {
            let url = "sale/updateproductprice"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/sale/products  
        putProducts: function (details) {
            let url = "sale/products"
            return client.request({ url: url }, { method: 'PUT', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/sale/services  
        putServices: function (details) {
            let url = "sale/services"
            return client.request({ url: url }, { method: 'PUT', body: JSON.stringify(details) })
        },
    };
};