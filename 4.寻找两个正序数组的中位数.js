/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length,
        n = nums2.length;
    let left = parseInt((m + n + 1) / 2);
    let right = parseInt((m + n + 2) / 2);

    let findKth = function(n1, i, n2, j, k) {
        let temp = Math.floor(k / 2);
        if (i >= n1.length) return n2[j + k - 1];
        if (j >= n2.length) return n1[i + k - 1];
        if (k == 1) return Math.min(n1[i], n2[j]);
        let midV1 = (i + k / 2 - 1 < n1.length) ? n1[i + temp - 1] : Infinity,
            midV2 = (j + k / 2 - 1 < n2.length) ? n2[j + temp - 1] : Infinity;
        if (midV1 < midV2) return findKth(n1, i + temp, n2, j, k - temp);
        else return findKth(n1, i, n2, j + temp, k - temp);
    }

    return (findKth(nums1, 0, nums2, 0, left) + findKth(nums1, 0, nums2, 0, right)) / 2;
};
// @lc code=end