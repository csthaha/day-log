// // var uniquePaths = function (m, n) {
// //     let dp = new Array(n);
// //     for (let i = 0; i < n; i ++) {
// //         dp[i] = new Array(m);
// //         dp[i][0] = 1;
// //     }
// //     for (let i = 0; i < m; i ++) {
// //         dp[0][i] = 1;
// //     }
// //     for (let i = 1; i < n; i ++) {
// //         for (let j = 1; j < m; j ++) {
// //             dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
// //         }
// //     }
// //     return dp[n - 1][m - 1];
// // };
// var uniquePaths = function(m, n) {
//     let dp = new Array(n);
//     for(let i = 0; i < n; i++) {
//         dp[i] = new Array(m);
//         dp[i][0] = 1;
//     }
//     for(let i = 0; i < m; i++) {
//         dp[0][i] = 1;
//     }
//     for(let i = 1; i < n; i++) {
//         for(let j = 1; j < m; j++) {
//             dp[i][j] = dp[i][j-1] + dp[i-1][j]
//         }
//     }
//     return dp[n-1][m-1]
// };
// console.log(uniquePaths(3, 7));

