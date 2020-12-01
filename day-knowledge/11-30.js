/**
 * T 22
 * __proto__ 是每个对象都有的属性，可以理解为 “构造器的原型”。即 __proto__ === constructor.prototype
 *  __proto__ 已经从 web 标准中删除，现在更推荐使用 object.getPrototypeOf / Reflect.getPrototypeOf
 * prototype 函数的原型对象
 */

 function f() {}
 const a = f.prototype, b = Object.getPrototypeOf(f)
 console.log(new f().__proto__ === f.prototype); // true
 console.log(a === b);
 console.log(Object.getPrototypeOf(new f()), a === Object.getPrototypeOf(new f()));
 console.log(Function.prototype, b === Function.prototype);

 /**
  * f.prototype 是使用 new 创建的 f 实例的原型，而 Object.getPrototypeOf 是 f 函数的原型
  * 
  */

  /**
   * T 23
   */

  function showCase(value) {
    switch(value) {
    case 'A':
        console.log('Case A');
        break;
    case 'B':
        console.log('Case B');
        break;
    case undefined:
        console.log('undefined');
        break;
    default:
        console.log('Do not know!');
    }
}
showCase(new String('A'));
/**
 *  switch 是严格比较，String实例和字符串不一样
 * 
 */
var str1 = 'str1'   // 字符串
var str2 = new String('str2')   // 字符串对象
console.log(str1, str2, str1 === str2);

/**
 * T 24
 */

console.log([2,1,0].reduce(Math.pow));
console.log([].reduce(Math.pow));

/**
A. 2 报错
B. 2 NaN
C. 1 报错
D. 1 NaN
*/

/**
 * arr.reduce(callback[, initialValue])
 *  - reduce 接受两个参数，一个回调，一个初始值
 *  - 回调函数接受四个参数 previousValue, currentValue, currentIndex, array
 *  - 需要注意的是 if the array is empty and no initialValue was provided, TypeError would be thrown
 *      所以第二个会报异常，第一个表达式等价于 Math.pow(2, 0) // 初始值为 0，所以返回 1
 */