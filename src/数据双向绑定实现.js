// 数据

// defineProperty 版本
var data = {
  test: 1,
};
function defineReactive(data, key, val) {
  Object.defineProperty(data, key, {
    get() {
      console.log("get-->", val);
      return val;
    },
    set(newVal) {
      console.log("set-->", newVal);
      //  在设置新值的时候去改变页面中绑定的值
      let odiv = document.getElementById("odiv");
      odiv.innerText = newVal;
      val = newVal;
    },
  });
}
defineReactive(data, "test", 1);
var count = 1;
function handleAdd() {
  // 改变test 的值会去触发defineReactive中的set方法去更新页面中的值
  data.test = count++;
}

// proxy 版
var _data = {
  test: 0,
};
function proxyDefineReactive(data) {
  return new Proxy(data, {
    get(target, key) {
      console.log("get-->", target, key);
      return target[key];
    },
    set(target, key, val) {
      if (target[key] !== val) {
        console.log("set-->", target, key, val);
        let odiv = document.getElementById("odiv");
        odiv.innerText = val;
        target[key] = val;
      }
    },
  });
}
// 能够直接监控一个对象的变化
let data = proxyDefineReactive(_data);
function handleAdd() {
  data.test = ++data.test;
}
