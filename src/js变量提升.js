/**
 * 在js解析过程中 声明的变量会被提前，而值会保留在本地位置， 申明的function是整个函数提前
 * 如果是 var fn=function(){} 声明的函数就与声明的变量一样，只有变量提升，函数留在当前为止
 */
// console.log(fn)
console.log(a); // undefined
var a = 1;
function foo() {}
function aa() {
  var a;
  a = 100;
  console.log(a); // 100
}
// var fn = function () {};
console.log(aa()); // undefined
console.log(foo); // function
