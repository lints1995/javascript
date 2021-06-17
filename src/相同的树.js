/**
 * https://leetcode-cn.com/problems/same-tree/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p.length !== q.length) return false;
  let isSame = true;
  for (let i = 0; i < p.length; i++) {
    if (p[i] !== q[i]) return (isSame = false);
  }
  return isSame;
};

console.log(isSameTree([1, 2], [1, null, 2]));
