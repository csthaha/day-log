/** N 皇后问题
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    var res = []
    var backTrack = (path, m) => {
        if(m < 0) {
            res.push(path)
            return;
        }
        for(let i = 0; i < n; i++) {
            m == i ? path.push('Q') : path.push('.')
            backTrack([...path], m--)
        }
    }
    backTrack([], n)
    return res
};

console.log(solveNQueens(4));