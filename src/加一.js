/**
 * https://leetcode-cn.com/problems/plus-one/
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  console.time('===>')
  let index = digits.length - 1;
  function decimal() {
    lastNum = digits[index] + 1;
    if (lastNum >= 10) {
      digits.splice(index, 1, 0);
      index--;
      if (index <= -1) {
        return digits.unshift(1);
      } else {
        decimal(digits);
      }
    } else {
      return digits.splice(index, 1, lastNum);
    }
    console.timeEnd('===>')
  }
  decimal();
  return digits;
};

console.log(plusOne([9]));
