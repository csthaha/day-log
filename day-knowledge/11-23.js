/**
 * T 9:写出执行结果，并解释原因
 */

var foo = function bar(){ return 12; };
console.log(typeof foo(), foo);
// console.log(typeof bar());  // 报错

// typeof(bar). // "undefined"
// typeof(foo()). // "number"
// typeof(foo).   // "function"
// typeof(bar()). // VM5167:1 Uncaught ReferenceError: bar is not defined

function zoo() {
    console.log(1+zoo,'zoo');
    return 11;
}

console.log(typeof zoo());      // number

/**
 * 命名函数表达式函数只能在函数体内有效
 */



 /**
  * T 10
  */
var x=1;
if(function f(){}){
    console.log(typeof f)
    x += typeof f;
}
console.log(x)

if(function f() {}) {
    console.log(1+ typeof f)
}

/**
 * 条件判断为假的情况有： 0, false, '', null, undefined, 未定义对象。函数声明写在运算符中，其中
 * 为 true，但放在运算符中的函数声明在执行阶段是找不到的。另外，对未声明的变量执行 typeof 不会报错
 * 会返回 undefined
 */