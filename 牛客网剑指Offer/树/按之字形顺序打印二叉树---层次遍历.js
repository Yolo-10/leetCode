/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
//层次遍历
function Print(pRoot) {
  // write code here
  if (!pRoot) return [];
  let leftToRight = true,
    res = [], //返回结果
    queue = [], //用队列的思想
    arr = [];
  queue.push(pRoot); //首先将根节点加入队列
  while ((size = queue.length) != 0) {
    arr = []; //存储每一层的元素
    for (let i = 0; i < size; i++) { //遍历同处一层的元素
      let node = queue.shift(); //从头部删除元素
      if (node.left) queue.push(node.left); //左节点存在，就加入队列
      if (node.right) queue.push(node.right); //右节点存在，就加入队列
      leftToRight ? arr.push(node.val) : arr.unshift(node.val); //从左到右还是从右到左？？？ 从尾部加入：从头部加入
    }
    leftToRight = !leftToRight; //从左到右 和 从右到左 来回切换
    res.push(arr); //将同一层的结果加入 返回结果数组
  }
  return res;
}
module.exports = {
  Print: Print,
};