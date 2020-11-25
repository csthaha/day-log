// /**
//  * T17
//  */
// var a;
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//     a = i
// }
// console.log(a);

// // 使用 let 关键字声明变量 i：使用 let 和 const 关键字声明的变量是具有块作用域的（块是 {} 之间的任何东西）。
// // 在交替期间，i 将被创建为一个新值，并且每个值都会存在于循环内的块级作用域。

// /**
//  * T18
//  */

// const num = {
//     a: 10,
//     add() {
//       return this.a + 2;
//     },
//     reduce: () => this.a -2
// };
// console.log(num.add());
// console.log(num.reduce());

// 12 NaN , 箭头函数中的 this 指向外层正常函数，因为外层没有函数所以指向 window， window 中没有 a，返回 undefined 然后做加减法

/**
 * T18(1)
 */

 function Foo() {
     getName = function() {
         console.log(1);
     }
     return this;
 }

 Foo.getName = function() {
     console.log(2);
 }

 Foo.prototype.getName = function() {
     console.log(3);
 }

 var getName = function() {
     console.log(4);
 }

 function getName() {
     console.log(6);
 }
