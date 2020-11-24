function _log() {
    console.log('11-24')
    return {a: 1}
}

var result = _log()

function use_log() {
    // var res = _log()
    // console.log(res);
    _log()   // 11-24
    var res = _log()
    console.log(res); //  11-24 {a: 1}

    console.log(result);    // 11-24 {a: 1}
}

/**
 * 主要是没用值去承载 _log 函数所 return 出来的值 也就是说 return 的是一个方法的话，该方法并没有执行
 * 
 * 
 * 而 addEventListener 方法将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行。
 * 也就是说相当于_debounce()()
 */

use_log()


var arr = {}
var exam = ['a','g','g','c','b']
for(let ele of exam) {
    arr.hasOwnProperty(ele) ? arr[ele]++ : arr[ele] = 1
}
console.log(arr);