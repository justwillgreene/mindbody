const querystring = require("querystring");
module.exports = function (client) {
    return {
        // https://api.mindbodyonline.com/public/v6/client/activeclientmemberships
        // Query Parameters:
        // ClientId:
        // *LocationId:
        activeClientMemberships: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/activeclientmemberships" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientaccountbalances
        // Query Parameters:
        // *BalanceDate:
        // *ClassId:
        // ClientIds:
        clientAccountBalances: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientaccountbalances" + qs
            return client.request({ url: url }, { method: 'GET' })
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
        contactLogs: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/contactlogs" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientcontracts
        // Query Parameters:
        // ClientId:
        // *CrossRegionalLookup:
        // *ClientAssociatedSitesOffset:
        clientContracts: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientcontracts" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientdirectdebitinfo
        // Query Parameters:
        // ClientId:
        clientDirectDebitInfo: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientdirectdebitinfo" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientduplicates
        // Query Parameters:
        // FirstName:
        // LastName:
        // Email:
        clientDuplicates: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientduplicates" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientformulanotes
        // Query Parameters:
        // ClientId:
        // AppointmentId:
        clientFormulaNotes: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientformulanotes" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientindexes
        // Query Parameters:
        // RequiredOnly:
        clientIndexes: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientindexes" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientpurchases
        // Query Parameters:
        // ClientId:
        // *StartDate:
        // *EndDate:
        // *SaleId:
        clientPurchases: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientpurchases" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientreferraltypes
        // Query Parameters:
        // IncludeInactive:
        clientReferralTypes: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientreferraltypes" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clients
        // QueryParameters:
        // ClientIds:
        // *SearchText:
        // *IsProspect:
        // LastModifiedDate:
        clients: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clients" + qs
            return client.request({ url: url }, { method: 'GET' })
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
        clientServices: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientservices" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientvisits
        // Query Parameters:
        // ClientId:
        // ClientAssociatedSitesOffset:
        // *CrossRegionalLookup:
        // EndDate:
        // StartDate:
        // UnpaidsOnly:           
        clientVisits: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientvisits" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/crossregionalclientassociations
        // Query Parameters:
        // *ClientId:
        // *Email:
        crossRegionalClientAssociations: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/crossregionalclientassociations" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/customclientfields
        // Query Parameters: Pagination
        customClientFields: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/customclientfields" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/requiredclientfields
        // Query Parameters:
        // RequiredClientFields:
        requiredClientFields: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/requiredclientfields" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/addarrival  
        addArrival: function (details) {
            let url = "client/addarrival"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/client/addclient  
        addClient: function (details) {
            let url = "client/addclient"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/client/addclientdirectdebitinfo  
        addClientDirectDebitInfo: function (details) {
            let url = "client/addclientdirectdebitinfo"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/client/addcontactlog  
        addContactLog: function (details) {
            let url = "client/addcontactlog"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/client/sendpasswordresetemail  
        sendPasswordResetEmail: function (details) {
            let url = "client/sendpasswordresetemail"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/client/updateclient  
        updateClient: function (details) {
            let url = "client/updateclient"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(body) })
        },

        // https://api.mindbodyonline.com/public/v6/client/updateclientservice  
        updateclientService: function (details) {
            let url = "client/updateclientservice"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/client/updateclientvisit  
        updateClientVisit: function (details) {
            let url = "client/updateclientvisit"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/client/updatecontactlog  
        updateContactLog: function (details) {
            let url = "client/updatecontactlog"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/client/uploadclientdocument  
        uploadClientDocument: function (details) {
            let url = "client/uploadclientdocument"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/client/uploadclientphoto  
        uploadClientPhoto: function (details) {
            let url = "client/uploadclientphoto"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientdirectdebitinfo  
        // Query Parameters:
        // ClientId
        deleteAppointmentAddOn: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientdirectdebitinfo" + qs
            return client.request({ url: url }, { method: 'DELETE' })
        }
    };
};