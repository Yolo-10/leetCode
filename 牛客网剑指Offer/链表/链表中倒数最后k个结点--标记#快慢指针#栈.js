/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pHead ListNode类
 * @param k int整型
 * @return ListNode类
 */
function FindKthToTail(pHead, k) {
  // write code here
  // 1. 标记法
  //   if (!pHead) return null;
  //   let cur = pHead,
  //     i = 1;
  //   while (cur != null) {
  //     cur.index = i++;
  //     cur = cur.next;
  //   }
  //   while(pHead!=null){
  //       if(pHead.index == i-k){
  //         return pHead;
  //       }
  //       pHead = pHead.next;
  //   }

  //2. 快慢指针
  // let fast=slow=pHead;
  // for(let i=0;i<k;i++){
  //     if(fast==null) return null;
  //     fast = fast.next;
  // }

  // while(fast!=null){
  //     fast=fast.next;
  //     slow=slow.next;
  // }
  // return slow;

  // 3.栈
  let stack = [],
    tmp = null;
  while (pHead != null) {
    stack.push(pHead);
    pHead = pHead.next;
  }
  let len = stack.length;
  for (let i = 1; i <= len; i++) {
    tmp = stack.pop();
    if (i == k) return tmp;
  }
  return null;
}
module.exports = {
  FindKthToTail: FindKthToTail,
};