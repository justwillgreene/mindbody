var MBO = require('../mindbody-sdk');

var mbo = new MBO({
    ApiKey: 'api-key',
    SiteId: 12345
});

let printResponse = (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

// https://api.mindbodyonline.com/public/v6/sale/acceptedcardtypes
mbo.sale.acceptedCardTypes(printResponse);

// https://api.mindbodyonline.com/public/v6/sale/contracts
mbo.sale.contracts(printResponse);
mbo.sale.contracts({
    'ContractIds': 'list of numbers',
    'SoldOnline': Boolean,
    'LocationId': Number,
    'ConsumerId': Number
},printResponse);

// https://api.mindbodyonline.com/public/v6/sale/custompaymentmethods
mbo.sale.customPaymentMethods(printResponse);

// https://api.mindbodyonline.com/public/v6/sale/giftcards
mbo.sale.giftCards(printResponse);
mbo.sale.giftCards({
    'Ids': 'list of numbers',
    'LocationId': Number,
    'SoldOnline': Boolean
},printResponse);

// https://api.mindbodyonline.com/public/v6/sale/packages
mbo.sale.packages(printResponse);
mbo.sale.packages({
    'PackageIds': 'list of numbers',
    'SellOnline': Boolean
},printResponse);

// https://api.mindbodyonline.com/public/v6/sale/products
mbo.sale.products(printResponse);
mbo.sale.products({
    'ProductIds': 'list of strings',
    'SearchText': 'string',
    'CategoryIds': 'list of strings',
    'SubCategoryIds': 'list of strings',
    'SellOnline': Boolean,
    'LocationId': Number
},printResponse);

// https://api.mindbodyonline.com/public/v6/sale/sales
mbo.sale.sales(printResponse);
mbo.sale.sales({
    'SaleId': Number,
    'StartSaleDateTime': DateTime,
    'EndSaleDateTime': DateTime,
    'PaymentMethodId': Number
},printResponse);

// https://api.mindbodyonline.com/public/v6/sale/services
mbo.sale.services(printResponse);
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
},printResponse);

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
},printResponse);

// https://api.mindbodyonline.com/public/v6/sale/purchasecontract
mbo.sale.purchaseContract({},printResponse);

// https://api.mindbodyonline.com/public/v6/sale/purchasegiftcard 
mbo.sale.purchaseGiftCard({},printResponse);