const MindBody = require("../lib/mindbody-sdk")
const sinon = require("sinon")
const expect = require("chai").expect
const nock = require("nock")
const endpoints = require("./mocks/endpointlist")
const categories = [
  "appointment",
  "class",
  "client",
  "enrollment",
  "payroll",
  "sale",
  "site",
  "staff",
  "usertoken",
]
const response = {data: "test data"}
const mb = new MindBody({
  ApiKey: 'api-key',
  SiteId: 12345
})
const sandbox = sinon.createSandbox()

describe("MindBody Class categories", function () {
  categories.forEach(function (category) {
    describe(category + " category return test", function () {
      beforeEach(function () {
        nock('https://api.mindbodyonline.com/public/v6')
          .get(/.*/)
          .reply(200, response)
          .post(/.*/)
          .reply(200, response)
          .delete(/.*/)
          .reply(200, response)
        sandbox.spy(mb, "request")
      })
      afterEach(function () {
        sandbox.restore()
      })
      const currentEndpoints = endpoints.filter(function (endpoint) { return endpoint.category === category })
      currentEndpoints.forEach(function (endpoint) {
        const basicRequestDetails = { ext: "/public/v6", subd: "api.", url: endpoint.apiEndpoint, verb: "GET" }
        it(`${endpoint.name} should return once when invoked`, async function () {
          const reply = await mb[category][endpoint.name]()
          sinon.assert.calledOnce(mb.request)
          sinon.assert.calledWith(mb.request, basicRequestDetails)
          expect(reply).to.deep.equal(response)
        })
      })
    })
  })
})
