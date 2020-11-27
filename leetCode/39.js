
// // const permute = (nums) => {
// //   // 1. 设置结果集
// //   const result = [];

// //   // 2. 回溯
// //   const recursion = (path, set) => {
// //     // 2.1 设置回溯终止条件
// //     if (path.length === nums.length) {
      
// //       // 2.1.1 推入结果集
// //       result.push(path.concat());

// //       // 2.1.2 终止递归
// //       return;
// //     }

// //     // 2.2 遍历数组
// //     for (let i = 0; i < nums.length; i++) {

// //       // 2.2.1 必须是不存在 set 中的坐标
// //       if (!set.has(i)) {

// //         // 2.2.2 本地递归条件（用完记得删除）
// //         path.push(nums[i]);
// //         set.add(i);

// //         // 2.2.3 进一步递归
// //         recursion(path, set);

// //         // 2.2.4 回溯：撤回 2.2.2 的操作
// //         path.pop();
// //         set.delete(i);
// //       }
// //     }
// //   };
// //   recursion([], new Set());

// //   // 3. 返回结果
// //   return result;
// // };

// // console.log(permute([1, 2, 3]));


// /**回溯: 全排列
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var permute = function(nums) {
//     var res = [];  
//     var backTrack = (path) => {
//         if(path.length === nums.length) {
//             res.push(path)
//             return
//         }
//         for(let i = 0; i < nums.length; i++) {
//             if(!path.includes(nums[i])) {
//                 path.push(nums[i])
//                 backTrack(path.concat())
//                 console.log('path: ', path);
//                 path.pop()
//             }
//         }
//     }
//     backTrack([])
//     return res;
// };
// console.log(permute([1, 2, 3]));

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 组合总和
 */
function backTrack(list, tempList, nums, remain, start) {
    /**
     * list 路径
     * templist 符合条件的数组
     * nums 目标
     * remain 还需要的值
     * start 循环列表的开始位置
     * 
     */
    if(remain < 0) return;
    else if(remain == 0) list.push([...tempList]);
    for(let i = start; i < nums.length; i++) {
        tempList.push(nums[i]);
        backTrack(list, tempList, nums, remain - nums[i], i)
        tempList.pop()
    }
}
var combinationSum = function(candidates, target) {
   const res = [];
   backTrack(res, [], candidates, target, 0)
   return res;
};

console.log(combinationSum([2,3,6,7]), 7);