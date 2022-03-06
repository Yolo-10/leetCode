/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    //双指针
    let left = 0,
        right = nums.length - 1;

    //左指针记录奇数
    //右指针记录偶数
    //当有一个奇数，有一个偶数，将它们交换一下位置
    while (left < right) {
        while (left < right && nums[left] % 2 == 1) left++;
        while (left < right && nums[right] % 2 == 0) right--;
        [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    return nums;
};