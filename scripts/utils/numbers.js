/**
 * @param {number} full from which calculates percentage
 * @param {number} part which is a part of full
 * @return {number} percentage part includes in full
 */
function getPercentage(full, part) {
  return (part / full) * 100;
}

function bytesToMb(bytes) {
  return bytes / 1048576;
}

function mbToBytes(mb) {
  return mb * 1048576;
}

/**
 * Returns fibonacci numbers sequence with given length
 * @param {Number}  num length of fibonacci sequence
 * @param {Object} memo fibonacci sequence memoisation object
 * */
function fiboMemo(num, memo = {}) {
  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return (memo[num] = fiboMemo(num - 1, memo) + fiboMemo(num - 2, memo));
}

/**
 * @description  Returns a random number from min to max.
 * @param {Number} min
 * @param {Number} max
 */
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

export {mbToBytes, bytesToMb, getPercentage, fiboMemo, random};
