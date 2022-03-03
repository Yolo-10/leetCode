/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    //dfs算法,采用迭代的思想
    //判断A,B的根节点以及子树是否相同
    var isSame = function(A, B) {
        //当B子树遍历完的退出条件
        if (B == null) return true;
        //当A子树遍历完的退出条件
        if (A == null) return false;
        //判断A,B根节点的值是否相同
        if (A.val != B.val) return false;
        //判断左右子树是否一致
        return isSame(A.left, B.left) && isSame(A.right, B.right);
    };
    //判断一开始的A,B是否为空
    if (!A || !B) return false;
    //判断是否一样
    if (isSame(A, B)) return true;
    //不是找A的左右子树进行匹配
    return isSubStructure(A.left, B) || isSubStructure(A.right, B);
};