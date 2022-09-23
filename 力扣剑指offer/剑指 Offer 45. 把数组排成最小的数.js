/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    nums.sort(function(a, b) {
        // return Number("" + a + b) - Number("" + b + a);
        return ("" + a + b) > ("" + b + a) ? 1 : -1;
    })

    return nums.join('');
};