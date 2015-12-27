
export function promiseRecurse (startPromise, makeNextPromise) {
  return new Promise(function (resolve, reject) {
    var results = []
    var handle = function (nextPromise) {
      return nextPromise.then(function (result) {
        results.push(result)
        nextPromise = makeNextPromise(result, results)
        if (nextPromise) {
          return handle(nextPromise)
        }
        resolve(results)
      }, function (err) {
        reject(err)
      })
      .catch(function (err) {
        reject(err)
      })
    }
    handle(startPromise)
  })
}

export default promiseRecurse
