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