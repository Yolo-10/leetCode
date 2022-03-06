/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //双指针
    let left = 0,
        right = nums.length - 1;

    //数组是递增排序
    //当二者和小于目标和，左指针往右移动增加
    //当二者和大于目标和，右指针往左移动减小
    while (left < right) {
        let summy = nums[left] + nums[right];
        if (summy < target) left++;
        else if (summy > target) right--;
        else return [nums[left], nums[right]];
    }
    return [];
};