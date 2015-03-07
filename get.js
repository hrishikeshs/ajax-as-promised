var Promise = require("bluebird");

module.exports = {
  get:  function(url, options) {
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
      xhr.open('GET', url);
      xhr.send();
    });
  }
}
