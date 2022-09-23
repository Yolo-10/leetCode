/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let row = Math.max(m, n);
    let col = Math.min(m, n);

    let top = Math.min(row, k + 1);
    let cnt = Math.min(col, k + 1);

    let res = 0;

    while (cnt--) {
        res += top;
        top--;
    }

    return res;
};