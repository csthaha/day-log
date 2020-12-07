/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    var res = [];
    var backTrack = (path, index) => {
        if (path.length === k) {
            res.push(path)
            return;
        }
        for(let i = index; i <= n; i++) {
            if(!path.includes(i)) {
                path.push(i)
                backTrack(path.slice(), i + 1)
                path.pop()
            }
        }
    }
    backTrack([], 1)
    return res;
};
console.log(combine(4,2));