/**
 * T 25: 变量 a 是否会被 GC （garbage collection 垃圾回收）
 */

 function Test() {
     var a = 1;
     return function() {
         eval("")
     }
 }
 Test();

 function test() {
     eval("var a = 2")
 }
 test()

 /**
  * 因为 eval 会欺骗词法作用域，例如 function test(){eval("var a = 1")}, 创建了一个变量 a，不确定 eval 是否
  * 对其进行了引用，所以为了保险，不对其进行优化。相对，try catch也不会被回收，with会创建新的作用域。
  */


  /**
   * T 26
   */

  const value  = 'Value is' + !!Number(['0']) ? 'yideng' : 'undefined';
  console.log(value);   // yideng

  /**
   * + 优先级大于 ？
   * 所以 .... 'value is false' ? 'yideng' : 'undefined'
   */