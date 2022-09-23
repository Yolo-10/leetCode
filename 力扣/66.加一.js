/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // number.MAX_SAFE_INTEGER = 9007199254740991，number能表示的最大整数，超过这个数pasrInt()就不行了
    // 所以改为用BigInt()
    // 在数字后面+n也是创建bigint的一种方式 const bigint = 1234567890123456789012345678901234567890n;
    let num = BigInt(digits.join(''))
    num = num + BigInt(1) + ''
    return num.split('').map(Number)
};
// @lc code=end