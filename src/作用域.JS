/**
 * 作用域
 */
// 变量提升 (通过var 声明的变量)
// 函数是整体提升，变量只提升声明
console.log(a); // undefined
console.log(func()); // 2
var a = 1;
function func() {
  console.log(2);
}

// 我们跟三个按钮绑定一个方法
var buttons = [{ name: "b1" }, { name: "b2" }, { name: "b3" }];
function bind() {
  // 类数组 看起来像数组有长度属性，但是其他数组方法无法使用
  let arr = Array.prototype.slice.apply(arguments); // 类数组转换成数组 [...arguments]
  console.log(arguments, arr);
  for (var i = 0; i < buttons.length; i++) {
    // for 循环执行完毕i=3了 ，for循环完了i不会被销毁调
    // 解决方法一 使用let声明能创建一个块级作用域，用完就会被销毁
    // 方法二 使用匿名函数立即执行保留这个i的值
    (function (num) {
      buttons[i].func = function () {
        // console.log(num);
      };
    })(i);
  }
}
bind(1);
buttons[0].func(); // 3
buttons[1].func(); // 3
buttons[2].func(); // 3
