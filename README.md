# mindbody

Node.js wrapper for the [MINDBODY](https://developers.mindbodyonline.com/PublicDocumentation/GettingStarted) API.

## Usage

```js
var Mbo = require('mindbody');

var mbo = new MBO({
    ApiKey: 'api-key',
    SiteId: 12345
});
```

You will need to generate your own API access tokens using the settings panel within MINDBODY.

## To Do

* Enhance documentation with extra details and links to the official Emma API documentation
* Add tests.
* Add POST, PUT, and DELETE methods

## Supported Methods

### Appointment

* mbo.appointment.ActiveSessionTimes([params], callback);
* mbo.appointment.AppointmentOptions([params], callback);
* mbo.appointment.BookableOptions([params], callback);
* mbo.appointment.ScheduleItems([params], callback);
* mbo.appointment.StaffAppointments([params], callback);

### Class

* mbo.class.Classes([params], callback);
* mbo.class.ClassDescriptions([params], callback);
* mbo.class.ClassSchedules([params], callback);
* mbo.class.ClassVisits([params], callback);
* mbo.class.WaitListEntries([params], callback);

### Client

* mbo.client.ActiveClientMemberships([params], callback);
* mbo.client.ClientAccountBalances([params], callback);
* mbo.client.ContactLogs([params], callback);
* mbo.client.ClientContracts([params], callback);
* mbo.client.ClientFormulaNotes([params], callback);
* mbo.client.ClientIndexes([params], callback);
* mbo.client.ClientPurchases([params], callback);
* mbo.client.ClientReferralTypes([params], callback);
* mbo.client.Clients([params], callback);
* mbo.client.ClientServices([params], callback);
* mbo.client.ClientVisits([params], callback);
* mbo.client.CrossRegionalClientAssociations([params], callback);
* mbo.client.CustomClientFields([params], callback);
* mbo.client.RequiredClientFields([params], callback);

### Enrollment

* mbo.enrollment.Enrollments([params], callback);

### Sale

* mbo.sale.AcceptedCardTypes([params], callback);
* mbo.sale.Contracts([params], callback);
* mbo.sale.CustomPaymentMethods([params], callback);
* mbo.sale.GiftCards([params], callback);
* mbo.sale.Packages([params], callback);
* mbo.sale.Products([params], callback);
* mbo.sale.Sales([params], callback);
* mbo.sale.Services([params], callback);

### Site

* mbo.site.ActivationCode([params], callback);
* mbo.site.Locations([params], callback);
* mbo.site.Programs([params], callback);
* mbo.site.Resources([params], callback);
* mbo.site.SessionTypes([params], callback);
* mbo.site.Sites([params], callback);

### Staff

* mbo.staff.Staff([params], callback);
* mbo.staff.StaffPermissions([params], callback);

### UserToken

* mbo.usertoken.Issue([params], callback);
