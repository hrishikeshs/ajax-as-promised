# ajax-as-promised
Promise wrapper for ajax for a bit of syntactic sugar sweetness.

```
npm install ajax-as-promised
```

Raw, bleeding edge.

Proposed Api
============

```
 var response = ajax.GET(url, options)
                 .then(function successHandler(res) {
                    }, function onerror(err) {
                });

 ajax.PUT(url,...)
     .then(function() { });


 ajax.POST(url, ..)
     .then(function() {});


 ajax.DELETE(url, ...)
     .then(function() { });
     
```


To enable easy chaining of promises 

```
  request.get(url)
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
Copyright © 2015 Hrishikesh S

licensed under the <a href="http://www.opensource.org/licenses/MIT">MIT License</a>.
