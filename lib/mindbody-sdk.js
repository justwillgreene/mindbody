const fetch = require("isomorphic-unfetch");

class MBOError extends Error {
  constructor(config) {
    super(config);
    this.url = config.url;
    this.status = config.status;
    this.statusText = config.statusText;
  }
}
class MBO {
  constructor(config) {
    this.baseURL = "mindbodyonline.com" || config.baseURL;
    this.ApiKey = null || config.ApiKey;
    this.SiteId = null || config.SiteId;
    this.Authorization = null || config.Authorization;
    var self = this;
    const categories = [
      "appointment",
      "class",
      "client",
      "enrollment",
      "payroll",
      "pricingoption",
      "sale",
      "site",
      "staff",
      "usertoken",
      "webhook",
    ];
    categories.forEach(function (category) {
      self[category] = require(__dirname + "/categories/" + category + ".js")(
        self
      );
    });
  }
  request(requestDetails, options) {
    requestDetails.subd = requestDetails.subd || "api.";
    requestDetails.ext = requestDetails.ext || "/public/v6";
    requestDetails.url = requestDetails.url || "";
    requestDetails.verb = requestDetails.verb || "GET";

    let url = "https://" +
      requestDetails.subd +
      this.baseURL +
      requestDetails.ext +
      "/" +
      requestDetails.url;

    let headers = {
      'Api-Key': this.ApiKey,
      'SiteId': this.SiteId,
      'Content-Type': 'application/json'
    };
    if (this.Authorization) {
      headers.Authorization = this.Authorization
    }

    let config = {
      ...options,
      headers: headers
    }

    return fetch(url, config)
      .then(r => {
        if (r.ok) {
          return r.json();
        }
        throw new MBOError({ url: r.url, status: r.status, statusText: r.statusText, headers: r.headers });
      });
  }
}

module.exports = MBO;