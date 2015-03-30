var get = require('../lib/get');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();

chai.use(chaiAsPromised);

describe('get-test', function() {
  describe('promise should resolve with response',  function() {
    before(function () {
      global.XMLHttpRequest = require('xhr2');
    });
    it('resolve when response is 200 OK', function() {
      var res = get('https://github.com/hrishikeshs/ajax-as-promised/graphs/contributors-data')
            .then(function(response) {
              return response[0].author && response[0].author.login;
            });
      res.should.eventually.equal('hrishikeshs');
    });
  });
    
  describe('promise should reject with error', function() {
    it('reject when response is not 200 OK', function() {
      var res = get('https://github.com/hrishikeshs.json')
            .then(function resolve(response) {
              return response;
            }, function reject(response) {
              throw new Error({msg: "promise rejected"});
            });
      return res.should.be.rejected;
    });
  });
});
