/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let arrs = [],
        arri = [],
        news = ''
        //遍历字符串
    for (let i = 0; i < s.length; i++) {
        //英文字母放入arrch
        let num = s.charCodeAt(i);
        // console.log(num);
        if ((65 <= num && num <= 90) || (97 <= num && num <= 122)) {
            arrs.push(s[i])
        }
    }
    for (let i = 0; i < s.length; i++) {
        let num = s.charCodeAt(i);
        if ((65 <= num && num <= 90) || (97 <= num && num <= 122)) {
            news += arrs.pop()
        } else {
            news += s[i]
        }
    }
    return news
};

// @lc code=end