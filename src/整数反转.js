/**
 *给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。z
 *如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 *假设环境不允许存储 64 位整数（有符号或无符号）。
 *来源：力扣（LeetCode）
 *链接：https://leetcode-cn.com/problems/reverse-integer
 *著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) return 0;
  const range = Math.pow(2, 31);
  x = x + "";
  let d = "";
  let reverseArr = x.split("").reverse();
  if (reverseArr.includes("-")) {
    d = reverseArr.splice(-1, 1);
  }
  if (reverseArr[0] === "0") {
    reverseArr.splice(0, 1);
  }
  x = reverseArr.join("");
  return x <= -range || x >= range - 1 ? 0 : `${d}${x}`;
};

// 参考
var reverseReference = function (x) {
  let res = 0;
  while (x) {
    res = res * 10 + (x % 10);
    if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) return 0;
    x = ~~(x / 10);
  }
  return res;
};
console.log(reverseReference(1534236469));
