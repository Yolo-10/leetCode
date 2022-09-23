/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let dp = [0, 1];
    const yu = 1e9 + 7
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % yu;
    }
    return dp[n];
};