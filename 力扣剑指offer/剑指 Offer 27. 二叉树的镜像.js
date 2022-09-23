/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    //广度优先算法
    // if (root == null) return null;
    // let queue = [root];
    // while (queue.length) {
    //     let head = queue[0];
    //     queue.shift();
    //     if (head.left) queue.push(head.left);
    //     if (head.right) queue.push(head.right);

    //     let tmp = head.right;
    //     head.right = head.left;
    //     head.left = tmp;
    // }
    // return root;


    //深度优先算法
    if (root == null) return null;

    // let tmp = root.right;
    // root.right = root.left;
    // root.left = tmp;
    [root.left, root.right] = [root.right, root.left];
    mirrorTree(root.left);
    mirrorTree(root.right);
    return root;
};