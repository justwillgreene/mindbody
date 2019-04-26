var request = require('request');

request = request.defaults({json: true});

/* Constructor for creating a MINDBODY client.
   {
      ApiKey: 'your api private key',
      SiteId: 12345678,
   }
*/
module.exports = function (parameters) {
  this.settings = {
    baseURL: "mindbodyonline.com" || parameters.baseURL,
    ApiKey: null || parameters.ApiKey,
    SiteId: null || parameters.SiteId
  };
  this.request = function (requestDetails, parameters, callback) {
    requestDetails.subd = requestDetails.subd || 'api.';
    requestDetails.ext = requestDetails.ext || '/public/v6';
    requestDetails.url = requestDetails.url || '';
    requestDetails.verb = requestDetails.verb || 'GET';

    var requestOptions = {
      url: 'https://' + requestDetails.subd + this.settings.baseURL + requestDetails.ext + '/' + requestDetails.url,
      method: requestDetails.verb
    };

    // If authentication is required for this request then attach it.
    if (this.settings.ApiKey )
      requestOptions.headers = {
        'Api-Key': this.settings.ApiKey,
      };
    else
      throw new Error('Must specify valid siteID and API key for MINDBODY API when creating the client.');
    if (this.settings.SiteId)
      requestOptions.headers.SiteId = this.settings.SiteId;
    if (this.settings.authorization)
      requestOptions.headers.authorization = this.settings.authorization;
    // If the verb is PUT or POST check for a body and attach it.
    if (requestDetails.verb == 'POST' | requestDetails.verb == 'PUT' | requestDetails.verb == 'PATCH')
      requestOptions.body = parameters.body;
    else if (requestDetails.verb == 'GET')
      requestOptions.qs = parameters.query;

    // Actually execute the request.
    request(
      requestOptions,
      function (err, response, body) {
        if (err)
          callback(err);
        else
        {
          if (typeof body != 'undefined') {
            // Check for an error code in the body of the response
            if (typeof body.error != 'undefined')
              callback(body);
            else
              callback(null, body);
          }
          else
          {
            callback('SERVICE ERROR:\n' + JSON.stringify(response, null, 2) + '\n');
          }
        }
      }
    );
  };

  // Attach all the API methods to this object.
  var categories = ['appointment', 'class', 'client', 'enrollment', 'sale', 'site', 'staff', 'usertoken', 'webhook'];
  var self = this;

  categories.forEach(function (category) {
    self[category] = require(__dirname + '/categories/' + category + '.js')(self);
  });
};
