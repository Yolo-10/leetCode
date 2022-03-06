/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    let n = matrix.length;
    if (!n) return false;
    let m = matrix[0].length || 1;

    let i = n - 1,
        j = 0;
    while (i >= 0 && j <= m - 1) {
        let tmp = matrix[i][j];
        if (tmp == target) return true;
        else if (tmp > target) i--;
        else j++;
    }
    return false;
};