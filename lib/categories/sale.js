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
        // Query Parameters:
        // *ContractIds:
        // *SoldOnline:
        // LocationId:
        // *ConsumerId:
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
        // Query Parameters:
        // barcodeId
        giftCardBalance: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "sale/giftcardbalance" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/sale/giftcards
        // Query Parameters:
        // *LocationId:
        // *SoldOnline:
        giftCards: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "sale/giftcards" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/sale/packages
        // Query Parameters:
        // *PackageIds:
        // *SellOnline:
        packages: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "sale/packages" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/sale/products
        // Query Parameters:
        // *ProductIds:
        // *SearchText:
        // *CategoryIds:
        // *SubCategoryIds:
        // *SellOnline:
        // *LocationId:
        products: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "sale/products" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/sale/sales
        // Query Parameters:
        // *SaleId:
        // *StartSaleDateTime:
        // *EndSaleDateTime:
        // *PaymentMethodId:
        sales: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "sale/sales" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/sale/services
        // Query Parameters:
        // *ProgramIds:
        // *SessionTypeIds:
        // *ServiceIds:
        // *ClassId:
        // *ClassScheduleId:
        // *SellOnline:
        // *LocationId:
        // *HideRelatedPrograms:
        // *StaffId:
        services: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "sale/services" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/sale/checkoutshoppingcart  
        checkoutShoppingCart: function (details) {
            let url = "sale/checkoutshoppingcart"
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
    };
};