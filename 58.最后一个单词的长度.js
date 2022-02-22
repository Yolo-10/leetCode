/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    //解法1：
    // let arr = s.trim().split(" ");
    // return arr[arr.length - 1].length;

    //解法2：循环遍历
    var len = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        //当结尾是空格的时候
        if (len == 0 && s[i] == " ") continue;
        else {
            //当第二次遇到空格时，最后一个单词结束
            if (s[i] == " ") return len;
            len++;
        }
    }
    return len;
};
// @lc code=end

/*
s.trim()掉字符串开头结尾的空格
s.split("")以指定字符分割字符串
*/