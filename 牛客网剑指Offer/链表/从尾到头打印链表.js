/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
  // write code here
  let res = [];

  while (head != null) {
    res.unshift(head.val);
    head = head.next;
  }
  return res;
}

module.exports = {
  printListFromTailToHead: printListFromTailToHead
};

//题解：unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。