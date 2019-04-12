module.exports = function (client) {
    return{
        // https://api.mindbodyonline.com/public/v6/sale/acceptedcardtypes
        AcceptedCardTypes: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'sale/acceptedcardtypes'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/sale/contracts
            // Query Parameters:
                // *ContractIds:
                // *SoldOnline:
                // LocationId:
                // *ConsumerId:
        Contracts: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'sale/contracts'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/sale/custompaymentmethods
        CustomPaymentMethods: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'sale/custompaymentmethods'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/sale/giftcards
            // Query Parameters:
                // *LocationId:
                // *SoldOnline:
        GiftCards: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'sale/giftcards'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/sale/packages
            // Query Parameters:
                // *PackageIds:
                // *SellOnline:
        Packages: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'sale/packages'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/sale/products
            // Query Parameters:
                // *ProductIds:
                // *SearchText:
                // *CategoryIds:
                // *SubCategoryIds:
                // *SellOnline:
                // *LocationId:
        Products: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'sale/products'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/sale/sales
            // Query Parameters:
                // *SaleId:
                // *StartSaleDateTime:
                // *EndSaleDateTime:
                // *PaymentMethodId:
        Sales: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'sale/sales'}, {query: query}, callback);
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
        Services: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'sale/services'}, {query: query}, callback);
        }
    };
};