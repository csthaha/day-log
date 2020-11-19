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