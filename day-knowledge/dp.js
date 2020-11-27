/**
 * 暴力递归
 * @param {*} n 
 */

function fib(n) {
    if(n == 1 || n == 2) return 1;
    return fib(n - 1) + fib(n - 2)
    
}

console.log(fib(3));

/**
 * 斐波那契数列和 爬楼梯一样
 * @param {*} n 
 */

function helper(n) {
    if(n < 1) return 0
    if(n == 1 || n == 2) return 1
    var dp = [0,1,1];
    for(let i = 3; i <= n; i++) {
        dp[i] = dp[i -1] + dp[i - 2]
    }
    return dp[n]
}

function fibMemory(n) {
    return helper(n)
}

console.log(fibMemory(3));
console.log(fibMemory(4));

/**
 * 凑零钱 leetCode 322
 */

 function coinChange(coins, amount) {
     /**
      * 1. 确定 base case 目标金额 money（amount）， 当 money 为 0 返回 0（不需要一个硬币）
      * 2. 确定状态 也就是原问题和子问题会变化量，题目硬币数量无限，只有 money 会因拿取一个硬币而减少
      *     所以还是 amount
      * 3. 确定选择，也是导致状态发生变化的行为，你每选择一枚硬币，就相当于减少了目标金额。
      * 4. 明确 dp 函数或者数组 的定义
      */
    const dp = (money) => {
        // 定义备忘录
        var memo = []
        for(money of memo) return memo[money]

        // 目标金额的情况
        if(money == 0) return 0
        if(money < 0) return -1
        // 定义一个较大的数作为结果
        var res = Number.MAX_VALUE
        // 遍历 硬币数
        for(let coin of coins) {
            // 求 amout 的最值 也就是求 amout - coin 的最值，就相当于求子问题。
            var subProblemCount = dp(money - coin)
            if(subProblemCount != -1) {
                // 那么拿取一个硬币，所以需要加 1
                res = Math.min(res, 1 + subProblemCount)
            }
        }
        memo[money] = res == Number.MAX_VALUE ? -1 : res
        return res == Number.MAX_VALUE ? -1 : res
    }
    return dp(amount)
 }

 console.log('coinChange',coinChange([1,2,5], 11));
 console.log('coinChange',coinChange([2], 3));