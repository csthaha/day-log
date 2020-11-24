/**
 * T 11
 */

 function f() {
 }

 console.log(f)   // 函数 f
 console.log(new f() instanceof f);  // true a instanceof b (a 是否是 b 的实例)

 function g() {
     return g;
 }

 console.log(new g() instanceof g);    // 当返回结果为 g 的函数对象，它并不是一个 g 的实例

 /**
  * T 12
  */

  var foo = {
      bar: function() {
          return this.baz
      },
      baz: 1
  }
  var res = foo.bar


  console.log(foo.bar(), res(), typeof(f = foo.bar)());
// 1 undefined undefined

/**
 * 解释： this 的指向问题
 * 1：bar 函数中 this，调用者为 foo， 所以 this指向 foo对象，即 this.baz
 * undefiend: res 调用者 为 window 所以是 undefined
 * 同上 typeof undefiend  = undefined
 */