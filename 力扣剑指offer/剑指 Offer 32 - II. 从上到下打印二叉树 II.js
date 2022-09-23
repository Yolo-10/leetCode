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
    let level = 0;

    while (queue.length) {
        let node;
        let len = queue.length;
        let tmp = [];
        level++;
        for (let i = 0; i < len; i++) {
            node = queue[0];
            queue.shift();

            tmp.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        if (level % 2 == 1) {
            tmp.reverse();
        }
        res.push(tmp)
    }
    return res;
};