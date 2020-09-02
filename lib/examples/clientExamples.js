var MBO = require('../mindbody-sdk');

var mbo = new MBO({
    ApiKey: 'api-key',
    SiteId: 12345
});

// https://api.mindbodyonline.com/public/v6/client/activeclientmemberships
mbo.client.activeClientMemberships()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.client.activeClientMemberships({
    'ClientId': 'string',
    'LocationId': Number
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/clientaccountbalances
mbo.client.clientAccountBalances()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.client.clientAccountBalances({
    'BalanceDate': DateTime,
    'ClassId': Number,
    'ClientIds': 'list of strings'
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/contactlogs
mbo.client.contactLogs()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.client.contactLogs({
    'ClientId': 'string',
    'StartDate': DateTime,
    'EndDate': DateTime,
    'StaffIds': 'list of numbers',
    'ShowSystemGenerated': Boolean,
    'TypeIds': 'list of numbers',
    'SubtypeIds': 'list of numbers'
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/clientcontracts
mbo.client.clientContracts()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.client.clientContracts({
    'ClientId': 'string',
    'CrossRegionalLookup': Boolean,
    'ClientAssociatedSitesOffset': Number
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/clientformulanotes
mbo.client.clientFormulaNotes()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.client.clientFormulaNotes({
    'ClientId': 'string',
    'AppointmentId': Number
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/clientindexes
mbo.client.clientIndexes()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.client.clientIndexes({
    'RequiredOnly': Boolean
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/clientpurchases
mbo.client.clientPurchases()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.client.clientPurchases({
    'ClientId': 'string',
    'StartDate': DateTime,
    'EndDate': DateTime,
    'SaleId': Number
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/clientreferraltypes
mbo.client.clientReferralTypes()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.client.clientReferralTypes({
    'IncludeInactive': 'nullable boolean'
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/clients
mbo.client.clients()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.client.clients({
    'ClientIds': 'list of strings',
    'SearchText': 'string',
    'IsProspect': 'nullable boolean',
    'LastModifiedDate': DateTime
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/clientservices
mbo.client.clientServices()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
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
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });


// https://api.mindbodyonline.com/public/v6/client/clientvisits
mbo.client.clientVisits()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.client.clientVisits({
    'ClientId': 'string',
    'ClientAssociatedSitesOffset': Number,
    'CrossRegionalLookup': Boolean,
    'EndDate': DateTime,
    'StartDate': DateTime,
    'UnpaidsOnly': Boolean
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/crossregionalclientassociations
mbo.client.crossRegionalClientAssociations()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
mbo.client.crossRegionalClientAssociations({
    'ClientId': 'string',
    'Email': 'string'
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/customclientfields
mbo.client.customClientFields()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/requiredclientfields
mbo.client.requiredClientFields()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/addarrival
mbo.client.addArrival({
    'ClientId': 'string',
    'LocationId': Number
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/addclient
mbo.client.addClient({
    'AccountBalance': Number,
    'Action': 'string',
    'AddressLine1': 'string',
    'AddressLine2': 'string',
    'ApptGenderPrefMale': 'nullableboolean',
    'BirthDate': DateTime,
    'City': 'string',
    'ClientCreditCard': {
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
    'ClientIndexes': [
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
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/addcontactlog
mbo.client.addContactLog({
    'ClientId': 'string',
    'AssignedToStaffId': Number,
    'Text': 'string',
    'FollowupByDate': DateTime,
    'ContactMethod': 'string',
    'ContactName': 'string',
    'Comments': 'string',
    'Types': [
        {
            'Id': Number,
            'SubTypes': 'list of numbers'
        }
    ],
    'Test': Boolean
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/sendpasswordresetemail 
mbo.client.sendPasswordResetEmail({
    'UserEmail': 'string',
    'UserFirstName': 'string',
    'UserLastName': 'string'
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/updateclient 
mbo.client.updateClient({

})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/updateclientservice
mbo.client.updateClientService({
    'ServiceId': Number,
    'ActiveDate': DateTime,
    'ExpirationDate': DateTime,
    'Test': Boolean
}, printResponse);

// https://api.mindbodyonline.com/public/v6/client/updateclientvisit
mbo.client.updateClientVisit({
    'VisitId': Number,
    'Makeup': 'nullable boolean',
    'SignedIn': 'nullable boolean',
    'Execute': 'string',
    'Test': Boolean,
    'SendEmail': Boolean
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/updatecontactlog
mbo.client.updateContactLog({
    'Id': Number,
    'Test': Boolean,
    'AssignedToStaffId': Number,
    'Text': 'string',
    'ContactName': 'string',
    'FollowupByDate': DateTime,
    'ContactMethod': 'string',
    'Comments': [
        {
            'Id': Number,
            'Text': 'string'
        }
    ],
    'Types': [
        {
            'Id': Number,
            'SubTypes': 'list of numbers'
        }
    ]
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/uploadclientdocument
mbo.client.uploadClientDocument({
    'ClientId': 'string',
    'File': HttpFile
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// https://api.mindbodyonline.com/public/v6/client/uploadclientphoto 
mbo.client.uploadClientPhoto({

})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });