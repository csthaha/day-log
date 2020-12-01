/**
 *  该题 本是 dp 的背包问题，但是我暂时还没完全理解 dp。
 * 偶然看到 回溯的更佳解法。
 * 回溯方法：https://leetcode-cn.com/problems/partition-equal-subset-sum/solution/shou-hua-tu-jie-fen-ge-deng-he-zi-ji-dfshui-su-si-/
 * 该方法不仅可以解决 分割成两个子集问题，还可以分割成 n 个子集（target = sum / n）
 * 
 * nums 数组
 * number 分割成几个
 */

const canPartition = (nums, number) => {
    let sum = 0;
    for (const n of nums) { // 求数组和
        sum += n;
    }
    if (sum % number != 0) return false; // 如果 sum 为奇数，直接返回 false

    const target = sum / number; // 目标和

    const dfs = (curSum, i) => {    // curSum是当前累加和，i是指针
        if (i == nums.length || curSum > target) { // 递归的出口
            return false;
        }
        if (curSum == target) {                    // 递归的出口
            return true;
        }
        // 选nums[i]，当前和变为curSum+nums[i]，考察的指针移动一位
        // 不选nums[i]，当前和还是curSum，考察的指针移动一位
        return dfs(curSum + nums[i], i + 1) || dfs(curSum, i + 1);
    };

    return dfs(0, 0); // 递归的入口，当前和为0，指针为0
};

console.log(canPartition([1, 5, 11, 5, 4, 7], 3));