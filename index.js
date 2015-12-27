
function fetchAll (start, extract) {
  return new Promise(function (resolve, reject) {
    results = []
    var handle = function (next) {
      return next.then(function (result) {
        results = results.concat(result)
        var next = extract(result, results)
        if (res.nextPage) {
          return handle(res.nextPage())
        }
        resolve(results)
      }, function (err) {
        reject(err)
      })
    }
    handle(start)
  })
}

module.exports = fetchAll
