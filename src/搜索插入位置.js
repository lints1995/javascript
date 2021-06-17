/**
 *https://leetcode-cn.com/problems/search-insert-position/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function (nums, target) {
  let numIndex = true;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      numIndex = false;
      return i;
    }
  }
  if (numIndex) return nums.length;
};
// searchInsert([1, 3, 5, 6], 7);
console.log(searchInsert([1, 3, 5, 6], 7));
