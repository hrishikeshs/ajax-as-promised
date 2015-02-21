# ajax-as-promised
Promise wrapper for ajax for a bit of syntactic sugar sweetness.

```
npm install ajax-as-promised
```

Raw, bleeding edge, just committed and published as a node module to make sure I get the cool npm module name. :D

Proposed Api
============

```
 var response = request(url, type, options) 
                 .then(function successHandler(res) {
                    }, function onerror(err) {
                });
//'type' can be one of the HTTP verbs. Options hash has the same signature and defaults as JQuery's $.ajax.
```


To enable easy chaining of promises 

```
  request(url, 'GET')
    .then(function() {
    })
    .then(function() {
    })
    .then(function() {
    });
```



Contributing
============

Pull requests welcome!


License
========

[MIT](http://opensource.org/licenses/MIT)
