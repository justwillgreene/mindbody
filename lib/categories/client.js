module.exports = function (client) {
    return{
        // https://api.mindbodyonline.com/public/v6/client/activeclientmemberships
            // Query Parameters:
                // ClientId:
                // *LocationId:
        ActiveClientMemberships: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'client/activeclientmemberships'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/client/clientaccountbalances
            // Query Parameters:
                // *BalanceDate:
                // *ClassId:
                // ClientIds:
        ClientAccountBalances: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'client/clientaccountbalances'}, {query: query}, callback);
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
        ContactLogs: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'client/contactlogs'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/client/clientcontracts
            // Query Parameters:
                // ClientId:
                // *CrossRegionalLookup:
                // *ClientAssociatedSitesOffset:
        ClientContracts: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'client/clientcontracts'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/client/clientformulanotes
            // Query Parameters:
                // ClientId:
                // AppointmentId:
        ClientFormulaNotes: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'client/clientformulanotes'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/client/clientindexes
            // Query Parameters:
                // RequiredOnly:
        ClientIndexes: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'client/clientindexes'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/client/clientpurchases
            // Query Parameters:
                // ClientId:
                // *StartDate:
                // *EndDate:
                // *SaleId:
        ClientPurchases: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'client/clientpurchases'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/client/clientreferraltypes
            // Query Parameters:
                // IncludeInactive:
        ClientReferralTypes: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'client/clientreferraltypes'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/client/clients
            // QueryParameters:
                // ClientIds:
                // *SearchText:
                // *IsProspect:
                // LastModifiedDate:
        Clients: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'client/clients'}, {query: query}, callback);
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
        ClientServices: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'client/clientservices'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/client/clientvisits
            // Query Parameters:
                // ClientId:
                // ClientAssociatedSitesOffset:
                // *CrossRegionalLookup:
                // EndDate:
                // StartDate:
                // UnpaidsOnly:           
        ClientVisits: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'client/clientvisits'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/client/crossregionalclientassociations
            // Query Parameters:
                // *ClientId:
                // *Email:
        CrossRegionalClientAssociations: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'client/crossregionalclientassociations'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/client/customclientfields
            // Query Parameters: Pagination
        CustomClientFields: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'client/customclientfields'}, {query: query}, callback);
        },

        // https://api.mindbodyonline.com/public/v6/client/requiredclientfields
            // Query Parameters:
                // RequiredClientFields:
        RequiredClientFields: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
            }
            else {
                callback = arguments[0];
            }
            client.request({verb: 'GET', url: 'client/requiredclientfields'}, {query: query}, callback);
        }
    };
};