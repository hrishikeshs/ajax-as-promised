var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();

chai.use(chaiAsPromised);

describe('get-test', function() {
  describe('sample',  function() {
    it('sample test to see stuff works', function() {
      var res = new Promise(function(res, rej) { res(1); });
      res.should.eventually.equal(1);
    });
  });
});
