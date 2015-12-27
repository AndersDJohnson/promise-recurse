
export function promiseRecurse (start, extract) {
  return new Promise(function (resolve, reject) {
    var results = []
    var handle = function (next) {
      return next.then(function (result) {
        results = results.concat(result)
        var next = extract(result, results)
        if (next) {
          return handle(next)
        }
        resolve(results)
      }, function (err) {
        reject(err)
      })
      .catch(function (err) {
        reject(err)
      })
    }
    handle(start)
  })
}

export default promiseRecurse
