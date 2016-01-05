# promise-recurse

> Recursive promise chains. Useful e.g. for paginated APIs that include a promise or URL for next page in each response.

[![npm](https://img.shields.io/npm/v/promise-recurse.svg)](https://www.npmjs.com/package/promise-recurse)

[![NPM](https://nodei.co/npm/promise-recurse.png)](https://nodei.co/npm/promise-recurse/)

## Install

```
npm install --save promise-recurse
```

## Use

`promiseRecurse(startPromise: Promise, makeNextPromise: Function): Promise`
* `startPromise` A promise to resolve first.
* `makeNextPromise` A function that, given the resolved value of previous promise, returns next promise to resolve. Return a falsy value to end.

```js
var promiseRecurse = require('promise-recurse').promiseRecurse

promiseRecurse(start, (result) => {
  return result.nextPage // supposing `nextPage` is a promise
})
.then((results) => {
  // `results` is an array of each result
})
```
