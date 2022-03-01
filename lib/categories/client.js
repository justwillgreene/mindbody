const querystring = require("querystring");
module.exports = function (client) {
    return {
        // https://api.mindbodyonline.com/public/v6/client/activeclientmemberships
        activeClientMemberships: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/activeclientmemberships" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/activeclientsmemberships
        activeClientsMemberships: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/activeclientsmemberships" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientaccountbalances
        clientAccountBalances: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientaccountbalances" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/contactlogs
        contactLogs: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/contactlogs" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientcontracts
        clientContracts: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientcontracts" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientdirectdebitinfo
        clientDirectDebitInfo: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientdirectdebitinfo" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientduplicates
        clientDuplicates: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientduplicates" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientformulanotes
        clientFormulaNotes: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientformulanotes" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientindexes
        clientIndexes: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientindexes" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientpurchases
        clientPurchases: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientpurchases" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientreferraltypes
        clientReferralTypes: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientreferraltypes" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientrewards
        clientRewards: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientrewards" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clients
        clients: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clients" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        
        // https://api.mindbodyonline.com/public/v6/client/clientcompleteinfo
        clientCompleteInfo: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientcompleteinfo" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientservices
        clientServices: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientservices" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientvisits        
        clientVisits: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientvisits" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientschedule        
        clientSchedule: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientschedule" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/crossregionalclientassociations
        crossRegionalClientAssociations: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/crossregionalclientassociations" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/customclientfields
        customClientFields: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/customclientfields" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/requiredclientfields
        requiredClientFields: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/requiredclientfields" + qs
            return client.request({ url: url }, { method: 'GET' })
        },

        // https://api.mindbodyonline.com/public/v6/client/contactlogtypes
        contactLogTypes: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/contactlogtypes" + qs
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

        // https://api.mindbodyonline.com/public/v6/client/addclientformulanote
        addClientFormulaNote: function (details) {
            let url = "client/addclientformulanote"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/client/addcontactlog  
        addContactLog: function (details) {
            let url = "client/addcontactlog"
            return client.request({ url: url }, { method: 'POST', body: JSON.stringify(details) })
        },

        // https://api.mindbodyonline.com/public/v6/client/sendautoemail  
        sendAutoEmail: function (details) {
            let url = "client/sendautoemail"
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

        // https://api.mindbodyonline.com/public/v6/client/clientrewards  
        updateClientRewards: function (details) {
            let url = "client/clientrewards"
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
        deleteDirectDebitInfo: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientdirectdebitinfo" + qs
            return client.request({ url: url }, { method: 'DELETE' })
        },

        // https://api.mindbodyonline.com/public/v6/client/clientformulanote
        deleteFormulaNote: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/clientformulanote" + qs
            return client.request({ url: url }, { method: 'DELETE' })
        },

        // https://api.mindbodyonline.com/public/v6/client/deletecontactlog
        deleteContactLog: function (details) {
            let qs = details ? "?" + querystring.stringify(details) : ""
            let url = "client/deletecontactlog" + qs
            return client.request({ url: url }, { method: 'DELETE' })
        }
    };
};