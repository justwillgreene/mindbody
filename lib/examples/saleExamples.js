var MBO = require('../mindbody-sdk');

var mbo = new MBO({
    ApiKey: 'api-key',
    SiteId: 12345
});

// https://api.mindbodyonline.com/public/v6/sale/acceptedcardtypes
mbo.sale.acceptedCardTypes()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/sale/contracts
mbo.sale.contracts()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.sale.contracts({
    'ContractIds': 'list of numbers',
    'SoldOnline': Boolean,
    'LocationId': Number,
    'ConsumerId': Number
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/sale/custompaymentmethods
mbo.sale.customPaymentMethods()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/sale/giftcards
mbo.sale.giftCards()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.sale.giftCards({
    'Ids': 'list of numbers',
    'LocationId': Number,
    'SoldOnline': Boolean
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/sale/packages
mbo.sale.packages()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.sale.packages({
    'PackageIds': 'list of numbers',
    'SellOnline': Boolean
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/sale/products
mbo.sale.products(printResponse);
mbo.sale.products({
    'ProductIds': 'list of strings',
    'SearchText': 'string',
    'CategoryIds': 'list of strings',
    'SubCategoryIds': 'list of strings',
    'SellOnline': Boolean,
    'LocationId': Number
}, printResponse);

// https://api.mindbodyonline.com/public/v6/sale/sales
mbo.sale.sales()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.sale.sales({
    'SaleId': Number,
    'StartSaleDateTime': DateTime,
    'EndSaleDateTime': DateTime,
    'PaymentMethodId': Number
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/sale/services
mbo.sale.services()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.sale.services({
    'ProgramIds': 'list of numbers',
    'SessionTypeIds': 'list of numbers',
    'ServiceIds': 'list of strings',
    'ClassId': Number,
    'ClassScheduleId': Number,
    'SellOnline': Boolean,
    'LocationId': Number,
    'HideRelatedPrograms': Boolean,
    'StaffId': Number
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/sale/checkoutshoppingcart 
mbo.sale.checkoutShoppintCart({
    'CartId': 'string',
    'ClientId': 'string',
    'Test': Boolean,
    'Items': [
        {
            'Item': {
                'Type': 'string',
                'Metadata': {
                    'Id': Number,
                }
            },
            'Quantity': Number,
        }
    ],
    'InStore': Boolean,
    'PromotionCode': 'string',
    'Payments': [
        {
            'Type': 'string',
            'MetaData': {
                'Amount': Number,
                'Notes': 'string'
            }
        }
    ],
    'SendEmail': 'nullable boolean',
    'LocationId': Number
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/sale/purchasecontract
mbo.sale.purchaseContract({})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/sale/purchasegiftcard 
mbo.sale.purchaseGiftCard({})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });