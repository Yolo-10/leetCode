/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    n1 = s.toLowerCase().replace(/[^a-z0-9A-Z]/g, '')
        // s = s.toLowerCase();
        // for (let ch of s) {
        //     let num = ch.charCodeAt(0);
        //     if ((48 <= num && num <= 57) || (97 <= num && num <= 122)) {
        //         n1 += ch;
        //     }
        // }
    return n1.split("").reverse().join("") === n1
};
// @lc code=end