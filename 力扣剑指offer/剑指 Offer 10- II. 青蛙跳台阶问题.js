/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    const mod = 1e9 + 7;
    let dp = [1, 1]
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % mod
    }
    return dp[n];
};