/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //将字符串数组排序
    //按照字符编码的规则排序
    //["reflower","abc","a","b","z"]==>[ 'a', 'abc', 'b', 'reflower', 'z' ]
    strs.sort();
    console.log(strs);
    let cnt = "";
    //比较第一个字符串与最后一个字符串
    //因为第一个字符串与最后一个字符串最不可能有公共前缀
    for (let i = 0; i < strs[0].length; i++) {
        if (strs[0][i] != strs[strs.length - 1][i]) break;
        cnt += strs[0][i];
    }
    return cnt;
};
// @lc code=end