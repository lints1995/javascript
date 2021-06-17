/**
 * 接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术
 * 场景 一个方法，传入一些固定的基础配置参数，而有一些参数是需要修改的
 */

function currying(a, b, c) {
  console.log("a->", a);
  console.log("b->", b);
  console.log("c->", c);
}
let f1 = currying.bind(this, 1, 2); // 通过bind函数来实现柯里化
f1(3);
f1(4);
