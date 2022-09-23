/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    let res = [];
    let queue = [root];
    let tmp = [];
    let level = 0;

    while (queue.length) {
        let node;
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            level++;

            if (level % 2 == 1) {
                node = queue[0];
                queue.shift();
            } else {
                node = queue[len - i - 1];
                queue.pop();
            }
            tmp.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return res;
};