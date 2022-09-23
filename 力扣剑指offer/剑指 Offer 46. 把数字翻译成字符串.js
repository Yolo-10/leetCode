/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    let nums = num + "";
    let dp = [1];
    dp[1] = (nums[0] + nums[1]) * 1 < 26 ? 2 : 1;

    for (let i = 2; i < nums.length; i++) {
        let tmp = (nums[i - 1] + nums[i]) * 1;
        if (tmp < 26 && tmp > 9) {
            //如何可以组队的话，数量是 自己一个的条数 + 可以组队的条数
            //可以组队的条数==上一个的条数dp[i-1] - 上一个中已经组队的条数
            //上一个已经组队的条数 == 上一个新增的条数 
            //即是dp[i-1]相对dp[i-2]增加的条数
            dp[i] = dp[i - 1] + dp[i - 2];
        } else {
            dp[i] = dp[i - 1];
        }
    }

    return dp[nums.length - 1]
};