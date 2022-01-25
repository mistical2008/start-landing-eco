/**
 * @description Parse URL parameters. Returns an object
 * @param {String} url for parsing params
 */
function getURLparams(url) {
    return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
      (a, v) => {
        const [key, val] = v.split('=');
        return (a[key] = val), a
      },
    {}
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
