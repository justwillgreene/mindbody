# mindbody

Node.js wrapper for the [MINDBODY Public API](https://developers.mindbodyonline.com/PublicDocumentation/V6), and the [MINDBODY Webhooks API](https://developers.mindbodyonline.com/WebhooksDocumentation).

# Index
1. [Usage](#usage)
2. [To Do](#to-do)
3. [Method Lists:](#method-lists)
    - [Appointment](#appointment-list)
    - [Class](#class-list)
    - [Client](#client-list)
    - [Enrollment](#enrollment-list)
    - [Sale](#sale-list)
    - [Site](#site-list)
    - [Staff](#staff-list)
    - [User Token](#user-token-list)
    - [Webhook](#webhook-list)
4. [Method Examples:](#method-examples)
    - [Appointment](#appointment-examples)
    - [Class](#class-examples)
    - [Client](#client-examples)
    - [Enrollment](#enrollment-examples)
    - [Sale](#sale-examples)
    - [Site](#sale-examples)
    - [Staff](#staff-examples)
    - [User Token](#user-token-examples)
    - [Webhook](#webhook-examples)


## Usage

### Standard Usage
The following implementation applies for:
* Appointment
* Class
* Client
* Enrollment
* Sale
* Site
* Staff
* User Token
```js
var MBO = require('mindbody');

var mbo = new MBO({
    ApiKey: 'api-key',
    SiteId: 12345
});
```

### Webhook Usage
Please note, Webhooks API Key is different than Public API Key.
MindBody Webhooks API documentation can be found [here](https://developers.mindbodyonline.com/WebhooksDocumentation).
All `mbo.webhook.*` uses should be implemented with:
```js
var MBO = require('mindbody');

// WEBHOOKS API KEY IS DIFFERENT THAN PUBLIC API KEY
var mbo = new MBO({
    ApiKey: 'api-key'
});
```

### Authenticated
A number of methods require authorization. If you would like to send requests to MINDBODY in 'BusinessMode' or using Staff credentials `mbo.usertoken.issue({'Username': 'USERNAME','Password': 'PASSWORD'}, callbackFunction);`. Apply this into the header of the request with `mbo.settings.authorization = data.AccessToken;`.
```js
var MBO = require('mindbody');

var mbo = new MBO({
    ApiKey: 'api-key',
    SiteId: 12345
});
mbo.settings.authorization = data.AccessToken;
```

You will need to generate your own API access tokens using the settings panel within MINDBODY.

## To Do

* [x] Enhance documentation with extra details
* [ ] Add tests
* [x] Supported Methods documentation
* [x] Add support for the following categories: 
    * [x] Appointment
    * [x] Class
    * [x] Client
    * [x] Enrollment
    * [x] Sale
    * [x] Site
    * [x] Staff
    * [x] User Token
    * [x] Webhook
    

## Methods List

### Appointment List
* mbo.appointment.activeSessionTimes({details}, callback);
* mbo.appointment.appointmentOptions({details}, callback);
* mbo.appointment.bookableOptions({details}, callback);
* mbo.appointment.scheduleItems({details}, callback);
* mbo.appointment.staffAppointments({details}, callback);
* mbo.appointment.addAppointment({details}, callback);
* mbo.appointment.updateAppointment({details}, callback);

### Class List
* mbo.class.classes({details}, callback);
* mbo.class.classDescriptions({details}, callback);
* mbo.class.classSchedules({details}, callback);
* mbo.class.classVisits({details}, callback);
* mbo.class.waitListEntries({details}, callback);
* mbo.class.addClientToClass({details}, callback);
* mbo.class.removeClientFromClass({details}, callback);
* mbo.class.removeFromWaitlist({details}, callback);
* mbo.class.substituteClassTeacher({details}, callback);

### Client List
* mbo.client.activeClientMemberships({details}, callback);
* mbo.client.clientAccountBalances({details}, callback);
* mbo.client.contactLogs({details}, callback);
* mbo.client.clientContracts({details}, callback);
* mbo.client.clientFormulaNotes({details}, callback);
* mbo.client.clientIndexes({details}, callback);
* mbo.client.clientPurchases({details}, callback);
* mbo.client.clientReferralTypes({details}, callback);
* mbo.client.clients({details}, callback);
* mbo.client.clientServices({details}, callback);
* mbo.client.clientVisits({details}, callback);
* mbo.client.crossRegionalClientAssociations({details}, callback);
* mbo.client.customClientFields({details}, callback);
* mbo.client.requiredClientFields({details}, callback);
* mbo.client.addArrival({details}, callback);
* mbo.client.addClient({details}, callback);
* mbo.client.addContactLog({details}, callback);
* mbo.client.sendPasswordResetEmail({details}, callback);
* mbo.client.updateClient({details}, callback);
* mbo.client.updateClientService({details}, callback);
* mbo.client.updateClientVisit({details}, callback);
* mbo.client.updateContactLog({details}, callback);
* mbo.client.uploadClientDocument({details}, callback);
* mbo.client.uploadClientPhoto({details}, callback);

### Enrollment List
* mbo.enrollment.enrollments({details}, callback);
* mbo.enrollment.addClientToEnrollment({details}, callback);

### Sale List
* mbo.sale.acceptedCardTypes({details}, callback);
* mbo.sale.contracts({details}, callback);
* mbo.sale.customPaymentMethods({details}, callback);
* mbo.sale.giftCards({details}, callback);
* mbo.sale.packages({details}, callback);
* mbo.sale.products({details}, callback);
* mbo.sale.sales({details}, callback);
* mbo.sale.services({details}, callback);
* mbo.sale.checkoutShoppingCart({details}, callback);
* mbo.sale.purchaseContract({details}, callback);
* mbo.sale.purchaseGiftCard({details}, callback);

### Site List
* mbo.site.activationCode({details}, callback);
* mbo.site.locations({details}, callback);
* mbo.site.programs({details}, callback);
* mbo.site.resources({details}, callback);
* mbo.site.sessionTypes({details}, callback);
* mbo.site.sites({details}, callback);

### Staff List
* mbo.staff.staff({details}, callback);
* mbo.staff.staffPermissions({details}, callback);

### UserToken List
* mbo.usertoken.Issue({details}, callback);

### Webhook List
* mbo.webhook.list(callback);
* mbo.webhook.create({details},callback);
* mbo.webhook.metrics(callback);
* mbo.webhook.withID(#ID).self(callback);
* mbo.webhook.withID(#ID).update({details},callback);
* mbo.webhook.withID(#ID).delete(callback);

## Method Examples
For all of these examples, I will be using a callback function `printResponse` as defined below:
```js
let printResponse = (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}
```

### Appointment Examples
```js
// https://api.mindbodyonline.com/public/v6/appointment/activesessiontimes
mbo.appointment.activeSessionTimes(printResponse);

// https://api.mindbodyonline.com/public/v6/appointment/appointmentoptions
mbo.appointment.appointmentOptions(printResponse);

// https://api.mindbodyonline.com/public/v6/appointment/bookableitems
mbo.appointment.bookableItems(printResponse);

// https://api.mindbodyonline.com/public/v6/appointment/scheduleitems
mbo.appointment.scheduleItems(printResponse);

// https://api.mindbodyonline.com/public/v6/appointment/staffappointments  
mbo.appointment.staffAppointments(printResponse);

// https://api.mindbodyonline.com/public/v6/appointment/addappointment 
mbo.appointment.addAppointment({
    'ApplyPayment': boolean,
    'ClientId': 'string',
    'Duration': number,
    'Execute': 'string',
    'EndDateTime': DateTime,
    'GenderPreference': 'string',
    'LocationId': number,
    'Notes': 'string',
    'ProviderId': 'string',
    'ResourceIds': 'list of numbers',
    'SendEmail': boolean,
    'SessionTypeId': number,
    'StaffId': number,
    'StaffRequested': boolean,
    'StartDateTime': DateTime
},printResponse);

// https://api.mindbodyonline.com/public/v6/appointment/updateappointment 
mbo.appointment.updateAppointment({
    'AppointmentId': number,
    'EndDateTime': DateTime,
    'Execute': 'string',
    'GenderPreference': 'string',
    'Notes': 'string',
    'ProviderId': 'string',
    'ResourceIds': 'list of numbers',
    'SendEmail': boolean,
    'SessionTypeId': number,
    'StaffId': number,
    'StartDateTime': DateTime,
    'Test': boolean
},printResponse);
```

### Class Examples
```js
// https://api.mindbodyonline.com/public/v6/class/classes
mbo.class.classes(printResponse);
mbo.class.classes({
    'ClassDescriptionIds': 'list of numbers',
    'ClassIds': 'list of numbers',
    'StaffIds': 'list of numbers',
    'StartDateTime': DateTime,
    'EndDateTime': DateTime,
    'ClientId': 'string',
    'ProgramIds': 'list of numbers',
    'SessionTypeIds': 'list of numbers',
    'LocationIds': 'list of numbers',
    'SemesterIds': 'list of numbers',
    'HideCancelledClasses': 'nullable boolean',
    'SchedulingWindow': 'nullable boolean',
    'LastModifiedDate': DateTime
},printResponse);

// https://api.mindbodyonline.com/public/v6/class/classdescriptions
mbo.class.classDescriptions(printResponse);
mbo.class.classDescriptions({
    'ClassDescriptionId': Number,
    'ProgramIds': 'list of numbers',
    'StartClassDateTime': DateTime,
    'EndClassDateTime': DateTime,
    'StaffId': Number,
    'LocationId': Number
},printResponse);

// https://api.mindbodyonline.com/public/v6/class/classschedules
mbo.class.classSchedules(printResponse);
mbo.class.classSchedules({
    'EndDate': DateTime,
    'LocationIds': 'list of numbers',
    'ProgramIds': 'list of numbers',
    'SessionTypeIds': 'list of numbers',
    'StaffIds': 'list of numbers',
    'StartDate': DateTime
},printResponse);

// https://api.mindbodyonline.com/public/v6/class/classvisits
mbo.class.classVisits(printResponse);
mbo.class.classVisits({
    'LastModifiedDate': DateTime
},printResponse);

// https://api.mindbodyonline.com/public/v6/class/waitlistentries
mbo.class.waitListEntries(printResponse);
mbo.class.waitListEntries({
    'ClassScheduleIds': 'list of numbers',
    'HidePastEntries': Boolean,
    'WaitlistEntryIds': 'list of numbers'
},printResponse);

// https://api.mindbodyonline.com/public/v6/class/addclienttoclass  
mbo.class.addClientToClass({
    'ClientId': 'string',
    'ClassId': Number,
    'Test': 'nullable boolean',
    'RequirePayment': 'nullable boolean',
    'Waitlist': 'nullable boolean',
    'SendEmail': 'nullable boolean',
    'WaitlistEntryId': Number,
    'ClientServiceId': Number,
    'CrossRegionalBooking': Boolean,
    'CrossRegionalBookingClientServiceSiteID': Number
},printResponse);

// https://api.mindbodyonline.com/public/v6/class/removeclientfromclass 
mbo.class.removeClientFromClass({
    'ClassId': Number,
    'Test': Boolean,
    'SendEmail': Boolean,
    'LateCancel': Boolean
},printResponse);

// https://api.mindbodyonline.com/public/v6/class/removefromwaitlist 
mbo.class.removeFromWaitlist({
    'WaitlistEntryIds': 'list of numbers'
},printResponse);

// https://api.mindbodyonline.com/public/v6/class/substituteclassteacher 
mbo.class.substitureClassTeacher({
    'ClassId': Number,
    'StaffId': Number,
    'OverrideConflicts': Boolean,
    'SendClientEmail': Boolean,
    'SendOriginalTeacherEmail': Boolean,
    'SendSubstituteTeacherEmail': Boolean
},printResponse);
```

### Client Examples
```js
// https://api.mindbodyonline.com/public/v6/client/activeclientmemberships
mbo.client.activeClientMemberships(printResponse);
mbo.client.activeClientMemberships({
    'ClientId': 'string',
    'LocationId': Number
},printResponse);

// https://api.mindbodyonline.com/public/v6/client/clientaccountbalances
mbo.client.clientAccountBalances(printResponse);
mbo.client.clientAccountBalances({
    'BalanceDate': DateTime,
    'ClassId': Number,
    'ClientIds': 'list of strings'
},printResponse);

// https://api.mindbodyonline.com/public/v6/client/contactlogs
mbo.client.contactLogs(printResponse);
mbo.client.contactLogs({
    'ClientId': 'string',
    'StartDate': DateTime,
    'EndDate': DateTime,
    'StaffIds': 'list of numbers',
    'ShowSystemGenerated': Boolean,
    'TypeIds': 'list of numbers',
    'SubtypeIds': 'list of numbers'
},printResponse);

// https://api.mindbodyonline.com/public/v6/client/clientcontracts
mbo.client.clientContracts(printResponse);
mbo.client.clientContracts({
    'ClientId':'string',
    'CrossRegionalLookup': Boolean,
    'ClientAssociatedSitesOffset': Number
},printResponse);

// https://api.mindbodyonline.com/public/v6/client/clientformulanotes
mbo.client.clientFormulaNotes(printResponse);
mbo.client.clientFormulaNotes({
    'ClientId': 'string',
    'AppointmentId': Number
},printResponse);

// https://api.mindbodyonline.com/public/v6/client/clientindexes
mbo.client.clientIndexes(printResponse);
mbo.client.clientIndexes({
    'RequiredOnly': Boolean
},printResponse);

// https://api.mindbodyonline.com/public/v6/client/clientpurchases
mbo.client.clientPurchases(printResponse);
mbo.client.clientPurchases({
    'ClientId': 'string',
    'StartDate': DateTime,
    'EndDate': DateTime,
    'SaleId': Number
},printResponse);

// https://api.mindbodyonline.com/public/v6/client/clientreferraltypes
mbo.client.clientReferralTypes(printResponse);
mbo.client.clientReferralTypes({
    'IncludeInactive': 'nullable boolean'
},printResponse);

// https://api.mindbodyonline.com/public/v6/client/clients
mbo.client.clients(printResponse);
mbo.client.clients({
    'ClientIds': 'list of strings',
    'SearchText': 'string',
    'IsProspect': 'nullable boolean',
    'LastModifiedDate': DateTime
},printResponse);

// https://api.mindbodyonline.com/public/v6/client/clientservices
mbo.client.clientServices(printResponse);
mbo.client.clientServices({
    'ClientId': 'string',
    'ClassId': Number,
    'ProgramIds': 'list of numbers',
    'SessionTypeId': Number,
    'Location Ids': 'list of numbers',
    'StartDate': DateTime,
    'EndDate': DateTime,
    'ShowActiveOnly': Boolean,
    'CrossRegionalLookup': Boolean,
    'ClientAssociatedSitesOffset': Number
},printResponse);

// https://api.mindbodyonline.com/public/v6/client/clientvisits
mbo.client.clientVisits(printResponse);
mbo.client.clientVisits({
    'ClientId': 'string',
    'ClientAssociatedSitesOffset': Number,
    'CrossRegionalLookup': Boolean,
    'EndDate': DateTime,
    'StartDate': DateTime,
    'UnpaidsOnly': Boolean
},printResponse);

// https://api.mindbodyonline.com/public/v6/client/crossregionalclientassociations
mbo.client.crossRegionalClientAssociations(printResponse);
mbo.client.crossRegionalClientAssociations({
    'ClientId': 'string',
    'Email': 'string'
},printResponse);

// https://api.mindbodyonline.com/public/v6/client/customclientfields
mbo.client.customClientFields(printResponse);

// https://api.mindbodyonline.com/public/v6/client/requiredclientfields
mbo.client.requiredClientFields(printResponse);

// https://api.mindbodyonline.com/public/v6/client/addarrival
mbo.client.addArrival({
    'ClientId': 'string',
    'LocationId': Number
},printResponse);

// https://api.mindbodyonline.com/public/v6/client/addclient
mbo.client.addClient({
    'AccountBalance': Number,
    'Action': 'string',
    'AddressLine1': 'string',
    'AddressLine2': 'string',
    'ApptGenderPrefMale': 'nullableboolean',
    'BirthDate': DateTime,
    'City': 'string',
    'ClientCreditCard':{
        'Address': 'string',
        'CardHolder': 'string',
        'CardNumber': 'string',
        'CardType': 'string',
        'City': 'string',
        'ExpMonth': 'string',
        'ExpYear': 'string',
        'LastFour': 'string',
        'PostalCode': 'string',
        'State': 'string'
    },
    'ClientIndexes':[
        {
            'Id': Number,
            'ValueId': Number
        }
    ],
    'ClientRelationships': [
        {
            'RelatedClient': {
                'Id': 'string'
            },
            'Relationship': {
                'Id': Number,
                'RelationshipName1': 'string',
            }
        }
    ],
    'Country': 'string',
    'CreationDate': DateTime,
    'CustomClientFields': [
        {
            'Value': 'string',
            'Id': Number
        }
    ],
    'Email': 'string',
    'EmergencyContactInfoName': 'string',
    'EmergencyContactInfoName': 'string',
    'EmergencyContactInfoPhone': 'string',
    'EmergencyContactInfoRelationship': 'string',
    'FirstName': 'string',
    'Gender': 'string',
    'HomeStudioLocation': {
        'Id': number
    },
    'HomePhone': 'string',
    'IsProspect': Boolean,
    'LastName': 'string',
    'LiabilityRelease': Boolean,
    'MiddleName': 'string',
    'MobilePhone': 'string',
    'MobileProvider': Number,
    'PostalCode': 'string',
    'ProspectStage': {
        'Id': Number
    },
    'ReferredBy': 'string',
    'SalesReps': [
        {
            'Id': Number,
            'SalesRepNumber': Number

        }
    ],
    'State': 'string',
    'Test': Boolean,
    'WorkExtension': 'string',
    'WorkPhone': 'string',
    'SendScheduleEmails': Boolean,
    'SendAccountEmails': Boolean
},printResponse);

// https://api.mindbodyonline.com/public/v6/client/addcontactlog
mbo.client.addContactLog({
    'ClientId': 'string',
    'AssignedToStaffId': Number,
    'Text': 'string',
    'FollowupByDate': DateTime,
    'ContactMethod': 'string',
    'ContactName': 'string',
    'Comments': 'string',
    'Types':[
        {
            'Id': Number,
            'SubTypes': 'list of numbers'
        }
    ],
    'Test': Boolean
},printResponse);

// https://api.mindbodyonline.com/public/v6/client/sendpasswordresetemail 
mbo.client.sendPasswordResetEmail({
    'UserEmail': 'string',
    'UserFirstName': 'string',
    'UserLastName': 'string'
},printResponse);

// https://api.mindbodyonline.com/public/v6/client/updateclient 
mbo.client.updateClient({

},printResponse);

// https://api.mindbodyonline.com/public/v6/client/updateclientservice
mbo.client.updateClientService({
    'ServiceId': Number,
    'ActiveDate': DateTime,
    'ExpirationDate': DateTime,
    'Test': Boolean
},printResponse);

// https://api.mindbodyonline.com/public/v6/client/updateclientvisit
mbo.client.updateClientVisit({
    'VisitId': Number,
    'Makeup': 'nullable boolean',
    'SignedIn': 'nullable boolean',
    'Execute': 'string',
    'Test': Boolean,
    'SendEmail': Boolean
},printResponse);

// https://api.mindbodyonline.com/public/v6/client/updatecontactlog
mbo.client.updateContactLog({
    'Id': Number,
    'Test': Boolean,
    'AssignedToStaffId': Number,
    'Text': 'string',
    'ContactName': 'string',
    'FollowupByDate': DateTime,
    'ContactMethod': 'string',
    'Comments':[
        {
            'Id': Number,
            'Text': 'string'
        }
    ],
    'Types':[
        {
            'Id': Number,
            'SubTypes': 'list of numbers'
        }
    ]
},printResponse);

// https://api.mindbodyonline.com/public/v6/client/uploadclientdocument
mbo.client.uploadClientDocument({
    'ClientId': 'string',
    'File': HttpFile
},printResponse);

// https://api.mindbodyonline.com/public/v6/client/uploadclientphoto 
mbo.client.uploadClientPhoto({

},printResponse);
```

### Enrollment Examples
```js
// https://api.mindbodyonline.com/public/v6/enrollment/enrollments
mbo.enrollment.enrollments(printResponse);
mbo.enrollment.enrollments({
    'ClassScheduleIds': 'list of numbers',
    'EndDate': DateTime,
    'LocationIds': 'list of numbers',
    'ProgramIds': 'list of numbers',
    'SessionTypeIds': 'list of numbers',
    'StaffIds': 'list of numbers',
    'StartDate': DateTime
},printResponse);

// https://api.mindbodyonline.com/public/v6/enrollment/addclienttoenrollment  
mbo.enrollment.addClientToEnrollment({
    'ClientId': 'string',
    'ClassScheduleId': Number,
    'EnrollDateForward': DateTime,
    'EnrollOpen': 'DateTime list',
    'Test': 'nullable boolean',
    'SendEmail': 'nullable boolean',
    'Waitlist': 'nullable boolean',
    'WaitlistEntryId': Number
},printResponse);
```

### Sale Examples
```js
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
```

### Site Examples
```js
// https://api.mindbodyonline.com/public/v6/site/activationcode
mbo.site.activationcode(printResponse);

// https://api.mindbodyonline.com/public/v6/site/locations
mbo.site.locations(printResponse);

// https://api.mindbodyonline.com/public/v6/site/programs
mbo.site.programs(printResponse);
mbo.site.programs({
    'ScheduleType': 'string',
    'OnlineOnly': Boolean
},printResponse);

// https://api.mindbodyonline.com/public/v6/site/resources
mbo.site.resources(printResponse);
mbo.site.resources({
    'SessionTypeIds': 'list of numbers',
    'LocationId': Number,
    'StartDateTime': DateTime
},printResponse);

// https://api.mindbodyonline.com/public/v6/site/sessiontypes
mbo.site.sessionTypes(printResponse);
mbo.site.sessionTypes({
    'ProgramIds': 'list of numbers',
    'OnlineOnly': Boolean
},printResponse);

// https://api.mindbodyonline.com/public/v6/site/sites
mbo.site.sites(printResponse);
mbo.site.sites({
    'SiteIds': 'list of numbers'
},printResponse);
```

### User Token Examples
```js
// https://api.mindbodyonline.com/public/v6/usertoken/issue
mbo.usertoken.issue({
    'Username': '', 
    'Password': ''
}, printClasses);
```

### Webhook Examples
Please note, Webhooks API Key is different than Public API Key.
MindBody Webhooks API documentation can be found [here](https://developers.mindbodyonline.com/WebhooksDocumentation).
```js
// https://mb-api.mindbodyonline.com/push/api/v1/subscriptions
mbo.webhook.list(printResponse);

// https://mb-api.mindbodyonline.com/push/api/v1/subscriptions
mbo.webhook.create({
    'eventIds': [
        'clientSaleCreated'
    ],
    'eventSchemaVersion': 1,
    'referenceId': 'GUID',
    'webhookUrl': 'https://something.com/endpoint'
},printResponse);

// https://mb-api.mindbodyonline.com/push/api/v1/metrics
mbo.webhook.metrics(printResponse);

// https://mb-api.mindbodyonline.com/push/api/v1/subscriptions/SUBSCRIPTION
mbo.webhook.withID('ID').self(printResponse);

// https://mb-api.mindbodyonline.com/push/api/v1/subscriptions/SUBSCRIPTION
mbo.webhook.withID('ID').update({
    'Status': 'Active',
    'WebhookUrl': 'https://something.com/endpoint'
},printResponse);

// https://mb-api.mindbodyonline.com/push/api/v1/subscriptions/SUBSCRIPTION
mbo.webhook.withID('ID').delete(printResponse);
```