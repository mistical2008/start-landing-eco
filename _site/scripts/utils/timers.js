/**
 * @description Promised timeout
 * @param {Number} ms milliseconds
 */
async function delay (ms) {
  return new Promise(r => setTimeout(r, ms));
}
export {delay}
