# promise-recurse

Recursive promise chains.

## Install

```
npm install --save promise-recurse
```

## Use

```js
var promiseRecurse = require('promise-recurse').promiseRecurse

promiseRecurse(start, (result) => result.nextPage)
.then((results) => {
  // `results` is an array of each result
})
```
