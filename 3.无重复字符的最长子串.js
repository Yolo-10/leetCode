/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxlen = 0,
        str = '',
        slen = s.length;

    for (let i = 0; i < slen; i++) {
        let index = str.indexOf(s[i]);
        if (index != -1) {
            str = str.slice(index + 1);
            len = str.length;
        }
        str += s[i];
        maxlen = Math.max(str.length, maxlen);
    }
    return maxlen;
};