const endpoints = [
  {
    category: "appointment",
    apiEndpoint: "appointment/activesessiontimes",
    name: "activeSessionTimes"
  },
  {
    category: "appointment",
    apiEndpoint: "appointment/addons",
    name: "appointmentAddOns"
  },
  {
    category: "appointment",
    apiEndpoint: "appointment/availabledates",
    name: "appointmentAvailableDates"
  },
  {
    category: "appointment",
    apiEndpoint: "appointment/appointmentoptions",
    name: "appointmentOptions"
  },
  {
    category: "appointment",
    apiEndpoint: "appointment/bookableitems",
    name: "bookableItems"
  },
  {
    category: "appointment",
    apiEndpoint: "appointment/scheduleitems",
    name: "scheduleItems"
  },
  {
    category: "appointment",
    apiEndpoint: "appointment/staffappointments",
    name: "staffAppointments"
  },
  {
    category: "appointment",
    apiEndpoint: "appointment/addappointment",
    name: "addAppointment"
  },
  {
    category: "appointment",
    apiEndpoint: "appointment/addappointmentaddon",
    name: "addAppointmentAddOn"
  },
  {
    category: "appointment",
    apiEndpoint: "appointment/updateappointment",
    name: "updateAppointment"
  },
  {
    category: "appointment",
    apiEndpoint: "appointment/deleteappointmentaddon",
    name: "deleteAppointmentAddOn"
  },
  {
    category: "class",
    apiEndpoint: "class/classes",
    name: "classes"
  },
  {
    category: "class",
    apiEndpoint: "class/classdescriptions",
    name: "classDescriptions"
  },
  {
    category: "class",
    apiEndpoint: "class/classschedules",
    name: "classSchedules"
  },
  {
    category: "class",
    apiEndpoint: "class/classvisits",
    name: "classVisits"
  },
  {
    category: "class",
    apiEndpoint: "class/waitlistentries",
    name: "waitListEntries"
  },
  {
    category: "class",
    apiEndpoint: "class/addclienttoclass",
    name: "addClientToClass"
  },
  {
    category: "class",
    apiEndpoint: "class/removeclientfromclass",
    name: "removeClientFromClass"
  },
  {
    category: "class",
    apiEndpoint: "class/removefromwaitlist",
    name: "removeFromWaitlist"
  },
  {
    category: "class",
    apiEndpoint: "class/substituteclassteacher",
    name: "substituteClassTeacher"
  },
  {
    category: "client",
    apiEndpoint: "client/activeclientmemberships",
    name: "activeClientMemberships"
  },
  {
    category: "client",
    apiEndpoint: "client/clientaccountbalances",
    name: "clientAccountBalances"
  },
  {
    category: "client",
    apiEndpoint: "client/contactlogs",
    name: "contactLogs"
  },
  {
    category: "client",
    apiEndpoint: "client/clientcontracts",
    name: "clientContracts"
  },
  {
    category: "client",
    apiEndpoint: "client/clientduplicates",
    name: "clientDuplicates"
  },
  {
    category: "client",
    apiEndpoint: "client/clientformulanotes",
    name: "clientFormulaNotes"
  },
  {
    category: "client",
    apiEndpoint: "client/clientindexes",
    name: "clientIndexes"
  },
  {
    category: "client",
    apiEndpoint: "client/clientpurchases",
    name: "clientPurchases"
  },
  {
    category: "client",
    apiEndpoint: "client/clientreferraltypes",
    name: "clientReferralTypes"
  },
  {
    category: "client",
    apiEndpoint: "client/clients",
    name: "clients"
  },
  {
    category: "client",
    apiEndpoint: "client/clientservices",
    name: "clientServices"
  },
  {
    category: "client",
    apiEndpoint: "client/clientvisits",
    name: "clientVisits"
  },
  {
    category: "client",
    apiEndpoint: "client/customclientfields",
    name: "customClientFields"
  },
  {
    category: "client",
    apiEndpoint: "client/crossregionalclientassociations",
    name: "crossRegionalClientAssociations"
  },
  {
    category: "client",
    apiEndpoint: "client/requiredclientfields",
    name: "requiredClientFields"
  },
  {
    category: "client",
    apiEndpoint: "client/addarrival",
    name: "addArrival"
  },
  {
    category: "client",
    apiEndpoint: "client/addclient",
    name: "addClient"
  },
  {
    category: "client",
    apiEndpoint: "client/addclientdirectdebitinfo",
    name: "addClientDirectDebitInfo"
  },
  {
    category: "client",
    apiEndpoint: "client/addcontactlog",
    name: "addContactLog"
  },
  {
    category: "client",
    apiEndpoint: "client/sendpasswordresetemail",
    name: "sendPasswordResetEmail"
  },
  {
    category: "client",
    apiEndpoint: "client/updateclient",
    name: "updateClient"
  },
  {
    category: "client",
    apiEndpoint: "client/updateclientservice",
    name: "updateclientService"
  },
  {
    category: "client",
    apiEndpoint: "client/updateclientvisit",
    name: "updateClientVisit"
  },
  {
    category: "client",
    apiEndpoint: "client/updatecontactlog",
    name: "updateContactLog"
  },
  {
    category: "client",
    apiEndpoint: "client/uploadclientdocument",
    name: "uploadClientDocument"
  },
  {
    category: "client",
    apiEndpoint: "client/uploadclientphoto",
    name: "uploadClientPhoto"
  },
  {
    category: "client",
    apiEndpoint: "client/clientdirectdebitinfo",
    name: "deleteAppointmentAddOn"
  },
  {
    category: "enrollment",
    apiEndpoint: "enrollments/enrollments",
    name: "enrollments"
  },
  {
    category: "enrollment",
    apiEndpoint: "enrollment/addclienttoenrollment",
    name: "addClientToEnrollment"
  },
  {
    category: "payroll",
    apiEndpoint: "payroll/commissions",
    name: "commissions"
  },
  {
    category: "payroll",
    apiEndpoint: "payroll/scheduledserviceearnings",
    name: "scheduledServiceEarnings"
  },
  {
    category: "payroll",
    apiEndpoint: "payroll/timecards",
    name: "timeCards"
  },
  {
    category: "payroll",
    apiEndpoint: "payroll/tips",
    name: "tips"
  },
  {
    category: "sale",
    apiEndpoint: "sale/acceptedcardtypes",
    name: "acceptedCardTypes"
  },
  {
    category: "sale",
    apiEndpoint: "sale/contracts",
    name: "contracts"
  },
  {
    category: "sale",
    apiEndpoint: "sale/custompaymentmethods",
    name: "customPaymentMethods"
  },
  {
    category: "sale",
    apiEndpoint: "sale/giftcardbalance",
    name: "giftCardBalance"
  },
  {
    category: "sale",
    apiEndpoint: "sale/giftcards",
    name: "giftCards"
  },
  {
    category: "sale",
    apiEndpoint: "sale/packages",
    name: "packages"
  },
  {
    category: "sale",
    apiEndpoint: "sale/products",
    name: "products"
  },
  {
    category: "sale",
    apiEndpoint: "sale/sales",
    name: "sales"
  },
  {
    category: "sale",
    apiEndpoint: "sale/services",
    name: "services"
  },
  {
    category: "sale",
    apiEndpoint: "sale/checkoutshoppingcart",
    name: "checkoutShoppingCart"
  },
  {
    category: "sale",
    apiEndpoint: "sale/purchasegiftcard",
    name: "purchaseGiftCard"
  },
  {
    category: "site",
    apiEndpoint: "site/genders",
    name: "genders"
  },
  {
    category: "site",
    apiEndpoint: "site/locations",
    name: "locations"
  },
  {
    category: "site",
    apiEndpoint: "site/memberships",
    name: "memberships"
  },
  {
    category: "site",
    apiEndpoint: "site/programs",
    name: "programs"
  },
  {
    category: "site",
    apiEndpoint: "site/resources",
    name: "resources"
  },
  {
    category: "site",
    apiEndpoint: "site/sessiontypes",
    name: "sessionTypes"
  },
  {
    category: "site",
    apiEndpoint: "site/sites",
    name: "sites"
  },
  {
    category: "staff",
    apiEndpoint: "staff/staff",
    name: "staff"
  },
  {
    category: "staff",
    apiEndpoint: "staff/staffpermissions",
    name: "staffPermissions"
  },
  {
    category: "usertoken",
    apiEndpoint: "usertoken/issue",
    name: "issue"
  },
]

module.exports = endpoints
