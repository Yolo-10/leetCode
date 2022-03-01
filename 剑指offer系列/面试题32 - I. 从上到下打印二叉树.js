/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//采用BFS广度优先算法，主要是利用队列先进先出的思想
//在将root元素入列后，将root元素值放进res数组中,在遍历root元素的左右子树
//如果左子树存在，将放进队列里
//右子树存在，也放入队列里
//并将root元素从队列头部弹出
//以同样的思想对队列的下一个头部元素（root用户的左元素，当它存在时）执行操作
var levelOrder = function(root) {
    if (root == null) return [];

    let res = [];
    let queue = [];
    queue.push(root);

    while (queue.length) {
        let tmp = queue[0];
        res.push(tmp.val);
        if (tmp.left) queue.push(tmp.left);
        if (tmp.right) queue.push(tmp.right);
        queue.shift();
    }
    return res
};