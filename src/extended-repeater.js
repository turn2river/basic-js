const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str,{
  repeatTimes = 1,
  separator = '+',
  addition = '',
  additionRepeatTimes = 1,
  additionSeparator = '|',
}) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr1 = []
  let arr2 = []
  str = String(str)


  for (let i = 0; i < additionRepeatTimes; i++) {
    if (addition === null) {
      addition = String(addition)
    }
    arr1.push(addition)
  }

  arr1 = arr1.join(additionSeparator)


  str = str + arr1

  for (let i = 0; i < repeatTimes; i++) {
    arr2.push(str)
  }
  return arr2.join(separator)

}

module.exports = {
  repeater
};
