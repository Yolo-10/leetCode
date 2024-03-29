/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        let n2 = target - nums[i];
        if (map[n2] != undefined) {
            return [map[n2], i]
        }
        map[num[i]] = i
    }
};
// @lc code=end