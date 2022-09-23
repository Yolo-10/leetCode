/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length;
    if (len == 0) return 0;
    let min = prices[0];
    let dp = [0];
    for (let i = 1; i < len; i++) {
        //使用数学函数
        min = Math.min(prices[i - 1], min);
        dp[i] = Math.max((prices[i] - min), dp[i - 1]);
    }
    return dp[prices.length - 1];
};