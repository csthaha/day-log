// /**
//  * @param {number} k
//  * @param {number} n
//  * @return {number[][]}
//  */
var combinationSum3 = function(k, n) {
    var res = []
    var backTrack = (index, path, sum) => {
        if(path.length === k && sum === n) {
            res.push(path);
            return
        }
        for(let i = index; i < 10; i++) {
            if(!path.includes(i)){
                if(sum + i > n) return
                path.push(i)
                backTrack(i + 1, path.slice(), sum + i) 
                path.pop()
            }
        }
    }
    backTrack(1, [], 0)
    return res
};



// const combinationSum3 = (k, n) => {
//     const res = []; 
//     // 基于当前已选的comb数组(和为sum)，在数start到数9中继续选
//     const dfs = (start, comb, sum) => { 
//       if (comb.length == k) {     // 选够k个数 结束递归
//         if (sum == n) {           // 组合中数之和等于n
//           res.push(comb.slice()); // 将它的拷贝加入解集
//         }
//         return;
//       }
//       for (let i = start; i <= 9; i++) { // 枚举出所有的选择（选项）
//         comb.push(i);                    // 作出一个选择i
//         dfs(i + 1, comb, sum + i);       // 基于该选择i，往下递归
//         comb.pop();                      // 撤销这个选择
//       }
//     };
  
//     dfs(1, [], 0);  // 入口
//     return res;
//   };

  console.log(combinationSum3(3, 6));
console.log(combinationSum3(3, 7));
console.log(combinationSum3(3, 9));