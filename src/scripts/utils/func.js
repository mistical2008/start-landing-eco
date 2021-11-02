/**
 * @description Return memoized function result or call func.
 * @param {Function}  fn pure function
 */
function memoize(fn) {
  return new Proxy(fn, {
    cache: new Map(),
    apply(target, thisArg, argsList) {
      let cacheKey = argsList.toString();
      if (!this.cache.has(cacheKey))
        this.cache.set(cacheKey, target.apply(thisArg, argsList));
      return this.cache.get(cacheKey);
    },
  });
}

/**
 * @description Runs a func in separate thread with WebWorker. Returns promise"
 * @param {Function} fn
 * https://www.30secondsofcode.org/js/s/run-async
 */
function runAsync(fn) {
  const worker = new Worker(
    URL.createObjectURL(new Blob([`postMessage((${fn})());`]), {
      type: 'application/javascript; charset=utf-8',
    }),
  );
  return new Promise((res, rej) => {
    worker.onmessage = ({data}) => {
      res(data), worker.terminate();
    };
    worker.onerror = err => {
      rej(err), worker.terminate();
    };
  });
}

export {memoize, runAsync};
