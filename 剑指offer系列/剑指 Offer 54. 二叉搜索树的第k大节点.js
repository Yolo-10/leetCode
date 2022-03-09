/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    let numbers = [];
    var cnt = 0;

    let DFS = function(root) {
        if (root.right !== null) DFS(root.right);
        // if(++cnt === k) {
        //     console.log(root.val);
        //     return root.val;
        // }
        numbers.push(root.val);
        if (root.left !== null) DFS(root.left);
    }

    DFS(root);
    // console.log(numbers)
    return numbers[k - 1];
    // return res;
};