"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.promiseRecurse = mod.exports;
  }
})(this, function (exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.promiseRecurse = promiseRecurse;

  function promiseRecurse(startPromise, makeNextPromise) {
    return new Promise(function (resolve, reject) {
      var results = [];

      var handle = function handle(nextPromise) {
        return nextPromise.then(function (result) {
          results.push(result);
          nextPromise = makeNextPromise(result, results);

          if (nextPromise) {
            return handle(nextPromise);
          }

          resolve(results);
        }, function (err) {
          reject(err);
        }).catch(function (err) {
          reject(err);
        });
      };

      handle(startPromise);
    });
  }

  exports.default = promiseRecurse;
});
