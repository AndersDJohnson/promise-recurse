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

  function promiseRecurse(start, extract) {
    return new Promise(function (resolve, reject) {
      var results = [];

      var handle = function handle(next) {
        return next.then(function (result) {
          results = results.concat(result);
          var next = extract(result, results);

          if (next) {
            return handle(next);
          }

          resolve(results);
        }, function (err) {
          reject(err);
        }).catch(function (err) {
          reject(err);
        });
      };

      handle(start);
    });
  }

  exports.default = promiseRecurse;
});
