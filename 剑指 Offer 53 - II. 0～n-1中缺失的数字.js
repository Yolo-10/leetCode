/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let cnt = nums.length;
    if (nums[cnt] = cnt) return cnt;
    for (let i = 0; i < cnt; i++) {
        if (i != nums[i])
            return i;
    }
};