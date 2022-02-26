/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    let items = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in items) {
            return nums[i]
        } else {
            items[nums[i]] = 1
        }
    }
};