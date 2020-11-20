/**
 * T1 写出执行结果，并解释
 */

(function () {
    k = 1
    var a = (b = 5);
})()

console.log(b, k);   // b 存在外部变量提升，相当于在外部定义了一个变量b但没有复制（var b）
// console.log(a);

/**
 * T2 写出执行结果，并解释
 */

var fullname = 'a';
var obj = {
   fullname: 'b',
   prop: {
      fullname: 'c',
      getFullname: function() {
         return this.fullname;
      }
   }
};
 
console.log(obj.prop.getFullname()); // c
var test = obj.prop.getFullname;
console.log(test());  // a (node 环境中 undefined，浏览器环境中 a)

var name = 'cst'
function getFullName() {
    return this.name;
}
console.log(getFullName());  // undefined(node 环境)
/**
 * 原因在于 this 指向的是函数的执行环境。
 * 
 */

 /**
  * T3
  */

 var company = {
    address: 'beijing'
}
var yideng = Object.create(company);
delete yideng.address
console.log(yideng.address);