/**
 * T1
 */
var a = 1;
(function a () {
    // 'use strict';
    a = 2;
    console.log(a);
})();

// me: undefined (var a = function, a 函数里面 a 变量提升 var a;)

// log: function

// 解释：立即执行的函数表达式 (IIFE) 的函数名称跟内部变量名重名后，
//  函数名称优先，因为函数名称是不可变的，内部会静默失败，在严格模式下会报错。

/**
 * T2
 */

var b = [0];
if ([0]) {
  console.log('条件为真：', b == true);
} else {
  console.log(b);
}

// console.log([] == false) --> true
// 先转为 Number 进行比较： [] --> 0, false --> 0, 所以结果为 true

// 数组转化为 Number 时:
// * [] 转化为 0
// * 有两个或以上的元素数组转化为 NaN
// * 只有一个元素时，根据该元素进行 Number 转换

// 所有的 对象 转化为 Number 时，都为 NaN

/**
 * 3  Proxy 用来自定义对象中的操作
 */

 const handler = {
     //get运算符有两个参数 - 对象本身和被访问的属性。
     get: function(obj, prop) {
         if(prop == 'id') {
             throw new Error('Cannot access private properties!')
         } else {
            console.log('this is handler.get')
            return obj[prop]   // 返回访问的key在obj的值
         }
     },
     //set运算符有3个参数 - 对象本身,被访问的属性, 修改的值。
     set: function(obj, prop, value) {
        if(typeof value !== 'string') {
            throw new Error('Only string values can be stored in this object!');
        } else {
            console.log(`${prop} is being set to ${value}`);
            obj[prop] = value;
        }
     }
 }

 const initObj = {
     id: 1,
     name: "Foo Bar"
 }

 const proxyObj = new  Proxy(initObj, handler)
 console.log('proxy obj', proxyObj.name)
//  console.log('proxy obj.id: ', proxyObj.id)

 proxyObj.age = 'twenty Four'
 console.log('proxy obj.age: ', proxyObj.age)