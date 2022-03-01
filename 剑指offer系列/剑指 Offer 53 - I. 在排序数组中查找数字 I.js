/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let index = nums.indexOf(target);
    if (index == -1) return 0;
    let lastindex = nums.lastIndexOf(target);
    return lastindex - index + 1;
};