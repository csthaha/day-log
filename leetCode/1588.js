/**
 * @param {number[]} arr
 * @return {number}
 * 给你一个正整数数组 arr ，请你计算所有可能的奇数长度子数组的和。

子数组 定义为原数组中的一个连续子序列。

请你返回 arr 中 所有奇数长度子数组的和 。
 */
var sumOddLengthSubarrays = function(arr) {
    if(arr.length <= 0) return
    var res = []
    for(let i = 1; i <= arr.length;  i += 2) {
        for(let j = 0; j <= arr.length - i; j++) {
            res.push(arr.slice(j, j + i))
        }
    }
    return res.flat(Number.MAX_VALUE).reduce((pre, next) => pre + next, 0)
};

console.log(sumOddLengthSubarrays([1,4,2,5,3]));