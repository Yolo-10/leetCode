/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    // 判断是否有顺子
    // 条件
    // 判断是否有连续的（除大小王）
    // 利用最大值-最小值是否小于5

    //法1：利用数组排序，判断是否有与上一个元素相等的
    //     利用Math对象找最大值最小值
    // nums.sort(function(a, b) {
    //     return a - b;
    // });

    // let maxn = 0,
    //     minn = nums[0] || 14;

    // for (let i = 1; i < 5; i++) {
    //     if (nums[i] == 0) continue;
    //     if (nums[i] == nums[i - 1]) return false;

    //     maxn = Math.max(maxn, nums[i]);
    //     minn = Math.min(minn, nums[i]);
    // }
    // return maxn - minn < 5;


    //法2：利用set找重
    let maxn = 0,
        minn = nums[0] || 14;
    let mySet = new Set();

    for (let i = 0; i < 5; i++) {
        if (nums[i] == 0) continue;
        if (mySet.has(nums[i])) return false
        mySet.add(nums[i]);
        maxn = Math.max(maxn, nums[i]);
        minn = Math.min(minn, nums[i]);
    }
    return maxn - minn < 5;
};