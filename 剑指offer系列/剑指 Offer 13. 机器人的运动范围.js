/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let visited = Array.from(Array(m), () => Array(n).fill(false));

    let value = function(index) {
        console.log(Math.floor(index / 10) + index % 10)
        return Math.floor(index / 10) + index % 10;
    }

    let dfs = function(i, j) {
        if (i > m || j > n || value(i) + value(j) > k || !visited) return 0;
        visited[i][j] = true;
        return (dfs(i + 1, j) + dfs(i, j + 1) + 1);
    }

    return dfs(0, 0);
};