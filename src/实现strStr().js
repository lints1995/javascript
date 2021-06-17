/**
 * https://leetcode-cn.com/problems/implement-strstr/
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr("hello", "ll"));
