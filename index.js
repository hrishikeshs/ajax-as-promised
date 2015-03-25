var Promise = require("bluebird");
var GET = require("./lib/get");
var PUT = require('./lib/put');

module.exports = {
  get: GET,
  put: PUT
};
