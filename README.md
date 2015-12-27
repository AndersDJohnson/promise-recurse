# promise-recurse

Recursive promise chains.

```js
var promiseRecurse = require('promise-recurse').promiseRecurse

promiseRecurse(start, (result) => result.nextPage)
.then((results) => {
  // `results` is an array of each result
})
```
