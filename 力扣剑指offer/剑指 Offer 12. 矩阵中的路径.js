/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let m = board.length;
    let n = board[0].length;
    let len = word.length;

    let search = function(i, j, cnt) {
        //当board[i,j]中i,j位置超过下标范围或字符不匹配，返回false
        if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] != word[cnt]) return false;
        //匹配时，记录匹配长度的变量cnt增加1
        cnt++;
        //并且将所匹配的位置的字符置为空，以免重复运用
        board[i][j] = '';
        //如何此时已经完全匹配的，则返回true了
        if (cnt == len) return true;
        //只匹配到一些的话，则继续匹配
        let res = (search(i - 1, j, cnt) || search(i + 1, j, cnt) ||
            search(i, j - 1, cnt) || search(i, j + 1, cnt));
        //注意：要考虑匹配失败但其他位置匹配的情况，所以需要将board[i][j]重新置回
        //如何能一直匹配的话，整个过程会一直在res的那里执行，所以不会影响最终结果
        board[i][j] = word[cnt - 1];
        return res;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (search(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};