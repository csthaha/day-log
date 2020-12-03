/**
 * T27
 */

var arr = [0, 1];
arr[5] = 5;
newArr = arr.filter(function(x) {
  return x === undefined;
});
console.log(newArr.length); // 0

/**
 * filter 方法创建一个新数组，其包含通过所提供函数实现的测试的所有元素。
 */

 /**
  * T 29 a 在什么情况下会打印1
  */

//  var a = ?;
//  if(a == 1 && a== 2 && a== 3){
//       console.log(1);
//  }

var a = [1,2,3]
a.join = a.shift
console.log(a);