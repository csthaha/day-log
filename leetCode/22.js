/**
 * @param {number} n
 * @return {string[]}
 * 括号生成
 */
var generateParenthesis = function(n) {
    var res = []
    var backTrack = (path, leftParenthesis, rightParenthesis) => {
        if(leftParenthesis === n && rightParenthesis === n) {
            // 左右括号都满足所给的数量 push
            res.push(path);
            return;
        }

        // 如果 左括号
        if(leftParenthesis < rightParenthesis) return
        if(leftParenthesis < n) {
            backTrack(path + '(', leftParenthesis + 1, rightParenthesis)
        }
        if(rightParenthesis < n) {
            backTrack(path + ')', leftParenthesis, rightParenthesis + 1)
        }
    }
    backTrack('', 0, 0)
    return res
};

console.log(generateParenthesis(3));