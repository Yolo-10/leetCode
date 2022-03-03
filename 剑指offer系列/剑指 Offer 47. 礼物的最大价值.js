/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    let line = grid.length;
    let col = grid[0].length;
    let dp = Array.from(Array(line), () => Array(col).fill(0));
    let val = 0;
    for (let i = 0; i < line; i++) {
        for (let j = 0; j < col; j++) {
            if (i == 0 && j == 0) dp[i][j] = grid[i][j];
            else if (i == 0) {
                dp[i][j] = dp[i][j - 1] + grid[i][j]
            } else if (j == 0) {
                dp[i][j] = dp[i - 1][j] + grid[i][j]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
            }
            val = Math.max(val, dp[i][j]);
        }
    }
    return val;
}