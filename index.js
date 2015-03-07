var Promise = require("bluebird");
var GET = require("get");
/*

var PUT = require("put");
var POST = require("POST");
var DELETE = require("DELETE");
// more verbs to be added as basic utilities here
*/
module.exports = {
  request:  function(url, type, options) {
    var xhr = new XMLHttpRequest();
    return new Promise(function(resolve, reject) {
      xhr.onload = function() {
        if(this.status === 200) {
          resolve(this.response);
        }
        else {
          reject(this.response);
        }
      };
      xhr.open(type, url);
      xhr.send();
    });
  }
};
