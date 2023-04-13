/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1,s2) {
  let counter = 0
  let a1 = s1.split('')
  let a2 = s2.split('')

  for ( let i = 0; i < a1.length; i++) {
      if (a2.indexOf(a1[i]) > -1) {
        a2.splice(a2.indexOf(a1[i]),1)
        counter++
      }
  }
  return counter
}

module.exports = {
  getCommonCharacterCount
};
