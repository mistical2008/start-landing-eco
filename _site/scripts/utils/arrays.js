/**
 * @description Groups the elements of an array based on the given function
 * @param {Array} arr to group by
 * @param {Function} fn group function to envok on each arr item
 */
function groupBy(arr, fn) {
  return arr
    .map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {});
}

export {groupBy};
