# MINDBODY SDK - Node JS
Node.js wrapper for the [MINDBODY Public API](https://developers.mindbodyonline.com/PublicDocumentation/V6), and the [MINDBODY Webhooks API](https://developers.mindbodyonline.com/WebhooksDocumentation).

The below is up to date with MINDBODY as of February 28, 2022.

# Index
1. [Usage](#usage)
2. [Method Lists:](#method-lists)
    - [Appointment](#appointment-list)
    - [Class](#class-list)
    - [Client](#client-list)
    - [Enrollment](#enrollment-list)
    - [Payroll](#payroll-list)
    - [Pricing Option](#pricing-option-list)
    - [Sale](#sale-list)
    - [Site](#site-list)
    - [Staff](#staff-list)
    - [User Token](#user-token-list)
    - [Webhook](#webhook-list)
3. [Method Examples:](#method-examples)


## Usage

### Standard Usage
The following implementation applies for:
* Appointment
* Class
* Client
* Enrollment
* Payroll
* Pricing Option
* Sale
* Site
* Staff
* User Token
* Webhook
```js
var MBO = require('mindbody');

var mbo = new MBO({
    ApiKey: 'api-key',
    SiteId: 12345
});

// https://api.mindbodyonline.com/public/v6/site/sites
mbo.site.sites()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/usertoken/issue
mbo.usertoken.issue({
    'Username': '',
    'Password': ''
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
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
    

## Methods List

### Appointment List
* mbo.appointment.activeSessionTimes({details}, callback);
* mbo.appointment.appointmentAddOns({details}, callback);
* mbo.appointment.appointmentAvailableDates({details}, callback);
* mbo.appointment.appointmentOptions({details}, callback);
* mbo.appointment.bookableItems({details}, callback);
* mbo.appointment.scheduleItems({details}, callback);
* mbo.appointment.staffAppointments({details}, callback);
* mbo.appointment.addAppointment({details}, callback);
* mbo.appointment.addAppointmentAddOn({details}, callback);
* mbo.appointment.updateAppointment({details}, callback);
* mbo.appointment.deleteAppointmentAddOn({details}, callback);

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
* mbo.client.activeClientsMemberships({details}, callback);
* mbo.client.clientAccountBalances({details}, callback);
* mbo.client.contactLogs({details}, callback);
* mbo.client.clientContracts({details}, callback);
* mbo.client.clientDirectDebitInfo({details}, callback);
* mbo.client.clientDuplicates({details}, callback);
* mbo.client.clientFormulaNotes({details}, callback);
* mbo.client.clientIndexes({details}, callback);
* mbo.client.clientPurchases({details}, callback);
* mbo.client.clientReferralTypes({details}, callback);
* mbo.client.clientReferralTypes({clientRewards}, callback);
* mbo.client.clients({details}, callback);
* mbo.client.clientCompleteInfo({details}, callback);
* mbo.client.clientServices({details}, callback);
* mbo.client.clientVisits({details}, callback);
* mbo.client.clientSchedule({details}, callback);
* mbo.client.crossRegionalClientAssociations({details}, callback);
* mbo.client.customClientFields({details}, callback);
* mbo.client.requiredClientFields({details}, callback);
* mbo.client.contactLogTypes({details}, callback);
* mbo.client.addArrival({details}, callback);
* mbo.client.addClient({details}, callback);
* mbo.client.addClientDirectDebitInfo({details}, callback);
* mbo.client.addClientFormulaNote({details}, callback);
* mbo.client.addContactLog({details}, callback);
* mbo.client.sendAutoEmail({details}, callback);
* mbo.client.sendPasswordResetEmail({details}, callback);
* mbo.client.updateClient({details}, callback);
* mbo.client.updateClientRewards({details}, callback);
* mbo.client.updateClientService({details}, callback);
* mbo.client.updateClientVisit({details}, callback);
* mbo.client.updateContactLog({details}, callback);
* mbo.client.uploadClientDocument({details}, callback);
* mbo.client.uploadClientPhoto({details}, callback);
* mbo.client.deleteDirectDebitInfo({details}, callback);
* mbo.client.deleteFormulaNote({details}, callback);
* mbo.client.deleteContactLog({details}, callback);

### Enrollment List
* mbo.enrollment.enrollments({details}, callback);
* mbo.enrollment.addClientToEnrollment({details}, callback);

### Payroll List
* mbo.payroll.comissions({details}, callback);
* mbo.payroll.scheduledServiceEarnings({details}, callback);
* mbo.payroll.timeCards({details}, callback);
* mbo.payroll.tips({details}, callback);

### Pricing Option List
* mbo.pricingoption.updatePricingOption({details}, callback);

### Sale List
* mbo.sale.acceptedCardTypes({details}, callback);
* mbo.sale.contracts({details}, callback);
* mbo.sale.customPaymentMethods({details}, callback);
* mbo.sale.giftCardBalance({details}, callback);
* mbo.sale.giftCards({details}, callback);
* mbo.sale.packages({details}, callback);
* mbo.sale.products({details}, callback);
* mbo.sale.productsInventory({details}, callback);
* mbo.sale.sales({details}, callback);
* mbo.sale.services({details}, callback);
* mbo.sale.transactions({details}, callback);
* mbo.sale.checkoutShoppingCart({details}, callback);
* mbo.sale.purchaseAccountCredit({details}, callback);
* mbo.sale.purchaseContract({details}, callback);
* mbo.sale.purchaseGiftCard({details}, callback);
* mbo.sale.updateProductPrice({details}, callback);
* mbo.sale.putProducts({details}, callback);
* mbo.sale.putServices({details}, callback);

### Site List
* mbo.site.activationCode({details}, callback);
* mbo.site.genders({details}, callback);
* mbo.site.locations({details}, callback);
* mbo.site.memberships({details}, callback);
* mbo.site.programs({details}, callback);
* mbo.site.promocodes({details}, callback);
* mbo.site.resources({details}, callback);
* mbo.site.sessionTypes({details}, callback);
* mbo.site.sites({details}, callback);
* mbo.site.categories({details}, callback);
* mbo.site.paymentTypes({details}, callback);
* mbo.site.addPromoCode({details}, callback);

### Staff List
* mbo.staff.staff({details}, callback);
* mbo.staff.permissions({details}, callback);
* mbo.staff.imageUrl({details}, callback);
* mbo.staff.sessionTypes({details}, callback);
* mbo.staff.addStaff({details}, callback);
* mbo.staff.addStaffAvailability({details}, callback);
* mbo.staff.assignStaffSessionType({details}, callback);
* mbo.staff.updateStaff({details}, callback);
* mbo.staff.updateStaffPermissions({details}, callback);

### UserToken List
* mbo.usertoken.issue({details}, callback);

### Webhook List
* mbo.webhook.list(callback);
* mbo.webhook.create({details},callback);
* mbo.webhook.metrics(callback);
* mbo.webhook.withID(#ID).self(callback);
* mbo.webhook.withID(#ID).update({details},callback);
* mbo.webhook.withID(#ID).delete(callback);

## Method Examples
All examples can be found in /lib/examples
