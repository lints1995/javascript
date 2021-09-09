/**
 * 栈和堆
 * 栈 计算机为原始类型开辟的一块内存空间 string number...
 * 堆 计算机为引用类型开辟的一块内存空间 object
 * 浅拷贝 A是一个对象 当A赋值给B后，改变A中的属性值，B中对应的值也会随之改变
 * 深拷贝 A是一个对象 当A赋值给B后，改变A中的属性值，B中对应的值不会跟着改变
 */

// 栈的存储
let a = "111"; // a存储到内存空间就是1111 a->['1111']
let b = a; // a赋值给b 存储在内存中的a，b就是['111','111']

let c = { foo: "111" };
//  c ['x000018'] -> {{ foo: "111"}}  引用类型的存储，是存储在堆中，把这个堆的内存地址'x000018'，存储在栈中，通过栈中的内存地址去找到堆中的值
//    栈           堆
let d = c; // c 赋值给c 只是赋值了c在栈中的地址， c,d ['x000018','x000018'] ->{{ foo: "111"}} ,这个地址依旧指向堆中同一个值

// 实现浅拷贝

let obj = {
  a: 1,
  b: {
    b1: "b1",
  },
  c: [1, "22", 33],
};

function simpleClone(newObj) {
  let _obj = {};
  for (const key in newObj) {
    _obj[key] = newObj[key];
  }
  return _obj;
}
let objCopy = simpleClone(obj);
objCopy.b.b1 = "222";
console.log(obj.b.b1, objCopy.b.b1); //222

let objCopy = Object.create(obj); // 通过create创建的对象objCope值放在__proto__上面，也是浅拷贝

// 深拷贝
// 还是通过遍历 只是下面有Object引用类型在递归遍历，直到不是Object为止
function deepClone(startObj, endObj) {
  let _obj = endObj || {};
  for (const key in startObj) {
    if (typeof startObj[key] === "object") {
      // 是 数组或者对象
      _obj[key] =
        Object.prototype.toString.call(startObj[key]).slice(8, -1) === "Object"
          ? {}
          : [];
      deepClone(startObj[key], _obj[key]);
    } else {
      _obj[key] = startObj[key];
    }
  }
  return _obj;
}
let objDeepCopy = deepClone(obj);
objDeepCopy.b.b1 = "222";
console.log(objDeepCopy.b.b1, obj.b.b1); // 222 , b1

// JSON.parse() JSON.stringify() 实现深拷贝
// 先把 Object ->String -> Object  String类型存储在栈里面，Object存储在堆里面
let objDeepCopy = JSON.parse(JSON.stringify(obj));
objDeepCopy.b.b1 = "222";
console.log(objDeepCopy.b.b1, obj.b.b1); // 222 , b1
