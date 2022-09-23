/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let plen = p.length;
    if (s.length != plen && p.indexOf('*') == -1) return false;
    for (var i = 0; i < plen; i++) {
        if (p[i] == '.') continue;
        if (p[i] == '*') break;
        if (p[i] != s[i]) return false;
    }
    return true;
};
// @lc code=end