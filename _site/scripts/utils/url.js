/**
 * @description Parse URL parameters. Returns an object
 * @param {String} url for parsing params
 */
function getURLParameters(url) {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
    ),
    {},
  );
}

/**
 * @description Gets the current URL without any params specified
 * @param {String} url for parsing params
 */
function getBaseURL(url) {
  return url.replace(/[?#].*$/, '');
}

export {getURLParameters, getBaseURL};
