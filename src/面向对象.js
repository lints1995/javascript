/**
 * 面向对象主要分为三点
 * 继承  儿子继承父亲的方法 通过__proto__属性实现
 * 封装  提取公共行为抽象成方法，封装成统一的函数
 * 多态 （多态下面分为两种）
 *   重载 根据传递的参数的多少不同实现不同的方法处理 用arguments实现
 *   重写 重新覆盖父类的方法  类似 child.run=function(){ console.log('child run')} 去重写父类的方法
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function () {
  console.log("hello");
};
function Student(name, age) {
  Person.call(this, name, age); // 调用父类构造函数
}
Student.prototype.study = function () {
  console.log("学习中");
};
// Object.create 方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
Student.prototype = Object.create(Person.prototype); // 继承Person父类原型上的方法
Student.prototype.constructor = Student;
let s1 = new Student("张三", 30);

s1.say(); //调用父类上的say方法，打印hello

// 实例化后绑定在实例化对象的__proto__上面
Person.prototype.childSay = function () {
  console.log("child say");
};

let p1 = new Person("张三");
p1.say = function () {
  console.log("child say");
};
p1.prototype.constructor = {};
console.log(Object.prototype.isPrototypeOf());
