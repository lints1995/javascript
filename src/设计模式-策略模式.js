/**
 * 策略模式
 * 优化if else 条件过多时代码冗长，阅读性差的问题，把不同的条件封装成方法，
 * 通过定义的枚举值StrategyType来进行对应策略的访问执行，便于对单一策略的修改和阅读理解
 */

// 具体的各种策略处理方法
const S1 = function (val) {
  console.log(`我是策略S1--》${val}`);
};
const S2 = function (val) {
  console.log(`我是策略S2--》${val}`);
};
const S3 = function (val) {
  console.log(`我是策略S3--》${val}`);
};
const S4 = function (val) {
  console.log(`我是策略S4--》${val}`);
};
// 枚举值和方法结合起来
const StrategyType = {
  S1,
  S2,
  S3,
  S4
};
console.log(StrategyType);
// 输出结果
// {
//     S1: [Function: S1],
//     S2: [Function: S2],
//     S3: [Function: S3],
//     S4: [Function: S4]
// }
// 根据策略不同实用不同策略
const getStrategy = function (s) {
  return StrategyType[s] ? StrategyType[s] : false;
};
StrategyType["S1"](11);
StrategyType["S2"](22);
StrategyType["S3"](33);
StrategyType["S4"](44);
// 输出结果
// 我是策略S1--》11
// 我是策略S2--》22
// 我是策略S3--》33
// 我是策略S4--》44
