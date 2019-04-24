module.exports = function (client) {
    return{
        // https://api.mindbodyonline.com/public/v6/sale/acceptedcardtypes
        acceptedCardTypes: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'sale/acceptedcardtypes'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'sale/acceptedcardtypes'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/sale/contracts
            // Query Parameters:
                // *ContractIds:
                // *SoldOnline:
                // LocationId:
                // *ConsumerId:
        contracts: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'sale/contracts'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'sale/contracts'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/sale/custompaymentmethods
        customPaymentMethods: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'sale/custompaymentmethods'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'sale/custompaymentmethods'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/sale/giftcards
            // Query Parameters:
                // *LocationId:
                // *SoldOnline:
        giftCards: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'sale/giftcards'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'sale/giftcards'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/sale/packages
            // Query Parameters:
                // *PackageIds:
                // *SellOnline:
        packages: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'sale/packages'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'sale/packages'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/sale/products
            // Query Parameters:
                // *ProductIds:
                // *SearchText:
                // *CategoryIds:
                // *SubCategoryIds:
                // *SellOnline:
                // *LocationId:
        products: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'sale/products'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'sale/products'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/sale/sales
            // Query Parameters:
                // *SaleId:
                // *StartSaleDateTime:
                // *EndSaleDateTime:
                // *PaymentMethodId:
        sales: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'sale/sales'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'sale/sales'}, {}, callback);
            }
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
        services: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'sale/services'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'sale/services'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/sale/checkoutshoppingcart  
        checkoutShoppingCart: function (details, callback) {
            client.request({verb: 'POST', url: 'sale/checkoutshoppingcart'}, {body: details}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/sale/purchasecontract  
        purchaseContract: function (details, callback) {
            client.request({verb: 'POST', url: 'sale/purchasecontract'}, {body: details}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/sale/purchasegiftcard  
        purchaseGiftCard: function (details, callback) {
            client.request({verb: 'POST', url: 'sale/purchasegiftcard'}, {body: details}, callback);
        },
    };
};