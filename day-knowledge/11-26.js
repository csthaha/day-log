/**
 * T 19
 */
const person = {name: "1126"}

function sayHi(age) {
    return `${this.name} is ${age}`
}

console.log(sayHi.call(person, 5));
console.log(sayHi.bind(person, 6));

let str = sayHi.bind(person, 6)
console.log(str());
/**
 * 使用两者，我们可以传递我们想要 this 关键字引用的对象。但是，
 * .call 方法会立即执行! .bind 方法会返回函数的拷贝值，但带有绑定的上下文！他不会立即执行。
 */

 /**
  * T20
  */

  var arr = ["1", "2", "3"].map(parseInt);
  console.log("T20: ", arr);  // 1 NaN NaN

  /**
   *  Array.protoType.map()
   * array.map(callback[,thisArg])
   * 
   * map 函数中 callback 回调函数的执行规则：
   * 会自动传入三个参数：
   * currentvalue（当前被传递的元素）
   * index(当前被传递的元素的索引)
   * array(调用map方法的数组)
   * 
   * 所以:
   *  parseInt("1", 0)
   *  parseInt("2", 1)
   *  parseInt("3", 2)
   * 
   * parseInt的第二个参数radix为0时，ECMAScript5将string作为十进制数字的字符串解析；
    parseInt的第二个参数radix为1时，解析结果为NaN；
    parseInt的第二个参数radix在2—36之间时，如果string参数的第一个字符（除空白以外），不属于radix指定进制下的字符，解析结果为NaN。
    parseInt("3", 2)执行时，由于"3"不属于二进制字符，解析结果为NaN。
   */

   /**
    * T21
    */

    console.log(typeof null, null instanceof Object);

    /**
     * 1） typeof 返回一个表示类型的字符串.
        typeof 的结果列表
            Undefined "undefined"
            Null "object"
            Boolean "boolean"
            Number "number"
            String "string"
            Symbol "symbol"
            Function "function"
            Object "object"
        2）instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上.
     */