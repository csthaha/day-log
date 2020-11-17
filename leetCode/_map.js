/**
 * 实现 map
 */

Object.prototype._map = function(fn, arg1) {
    console.log(this, this.a) // this指向，谁调用它指向谁
    if(typeof fn != 'function') {
        throw new TypeError(`${fn} is not a function`)
    }
    return JSON.stringify(this, (key, val) => {
        if(key) {
            return fn.call(arg1, key, val, this)
        } else {
            return val;
        }
    })
}
// 用例
let obj = {
    a: 2, b: 3, c: 4, d: 5
}

let _obj = obj._map((key, val) => val + key + p,  p = 1)

console.log(_obj)