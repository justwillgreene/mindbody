module.exports = function (client) {
    return{
        // https://api.mindbodyonline.com/public/v6/client/activeclientmemberships
            // Query Parameters:
                // ClientId:
                // *LocationId:
        activeClientMemberships: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'client/activeclientmemberships'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'client/activeclientmemberships'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/client/clientaccountbalances
            // Query Parameters:
                // *BalanceDate:
                // *ClassId:
                // ClientIds:
        clientAccountBalances: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'client/clientaccountbalances'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'client/clientaccountbalances'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/client/contactlogs
            // Query Parameters:
                // ClientId:
                // *StartDate:
                // *EndDate:
                // *StaffIds:
                // *ShowSystemGenerated:
                // *TypeIds:
                // *SubtypeIds:
        contactLogs: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'client/contactlogs'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'client/contactlogs'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/client/clientcontracts
            // Query Parameters:
                // ClientId:
                // *CrossRegionalLookup:
                // *ClientAssociatedSitesOffset:
        clientContracts: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'client/clientcontracts'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'client/clientcontracts'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/client/clientformulanotes
            // Query Parameters:
                // ClientId:
                // AppointmentId:
        clientFormulaNotes: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'client/clientformulanotes'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'client/clientformulanotes'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/client/clientindexes
            // Query Parameters:
                // RequiredOnly:
        clientIndexes: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'client/clientindexes'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'client/clientindexes'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/client/clientpurchases
            // Query Parameters:
                // ClientId:
                // *StartDate:
                // *EndDate:
                // *SaleId:
        clientPurchases: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'client/clientpurchases'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'client/clientpurchases'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/client/clientreferraltypes
            // Query Parameters:
                // IncludeInactive:
        clientReferralTypes: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'client/clientreferraltypes'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'client/clientreferraltypes'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/client/clients
            // QueryParameters:
                // ClientIds:
                // *SearchText:
                // *IsProspect:
                // LastModifiedDate:
        clients: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'client/clients'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'client/clients'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/client/clientservices
            // Query Parameters:
                // ClientId:
                // *ClassId:
                // *ProgramIds:
                // *SessionTypeId:
                // *LocationIds:
                // *StartDate:
                // *EndDate:
                // *ShowActiveOnly:
                // *CrossRegionalLookup:
                // *ClientAssociatedSitesOffset:
        clientServices: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'client/clientservices'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'client/clientservices'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/client/clientvisits
            // Query Parameters:
                // ClientId:
                // ClientAssociatedSitesOffset:
                // *CrossRegionalLookup:
                // EndDate:
                // StartDate:
                // UnpaidsOnly:           
        clientVisits: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'client/clientvisits'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'client/clientvisits'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/client/crossregionalclientassociations
            // Query Parameters:
                // *ClientId:
                // *Email:
        crossRegionalClientAssociations: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'client/crossregionalclientassociations'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'client/crossregionalclientassociations'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/client/customclientfields
            // Query Parameters: Pagination
        customClientFields: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'client/customclientfields'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'client/customclientfields'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/client/requiredclientfields
            // Query Parameters:
                // RequiredClientFields:
        requiredClientFields: function (details, callback) {
            if (typeof callback == 'function')
                client.request({verb: 'GET', url: 'client/requiredclientfields'}, {query: details}, callback);
            else {
                callback = details;
                client.request({verb: 'GET', url: 'client/requiredclientfields'}, {}, callback);
            }
        },

        // https://api.mindbodyonline.com/public/v6/client/addarrival  
        addArrival: function (details, callback) {
            client.request({verb: 'POST', url: 'client/addarrival'}, {body: details}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/client/addclient  
        addClient: function (details, callback) {
            client.request({verb: 'POST', url: 'client/addclient'}, {body: details}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/client/addcontactlog  
        addContactLog: function (details, callback) {
            client.request({verb: 'POST', url: 'client/addcontactlog'}, {body: details}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/client/sendpasswordresetemail  
        sendPasswordResetEmail: function (details, callback) {
            client.request({verb: 'POST', url: 'client/sendpasswordresetemail'}, {body: details}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/client/updateclient  
        updateClient: function (details, callback) {
            client.request({verb: 'POST', url: 'client/updateclient'}, {body: details}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/client/updateclientservice  
        updateclientService: function (details, callback) {
            client.request({verb: 'POST', url: 'client/updateclientservice'}, {body: details}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/client/updateclientvisit  
        updateClientVisit: function (details, callback) {
            client.request({verb: 'POST', url: 'client/updateclientvisit'}, {body: details}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/client/updatecontactlog  
        updateContactLog: function (details, callback) {
            client.request({verb: 'POST', url: 'client/updatecontactlog'}, {body: details}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/client/uploadclientdocument  
        uploadClientDocument: function (details, callback) {
            client.request({verb: 'POST', url: 'client/uploadclientdocument'}, {body: details}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/client/uploadclientphoto  
        uploadClientPhoto: function (details, callback) {
            client.request({verb: 'POST', url: 'client/uploadclientphoto'}, {body: details}, callback);
        },
    };
};