/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead) {
  // write code here

  // 1. 标记法
  //   while (pHead != null) {
  //     if(pHead.flag) return pHead;
  //     pHead.flag = true;
  //     pHead=pHead.next;
  //   }
  //   return null;

  //2. hash
  // let set = new Set();
  // while(pHead!=null){
  //     if(set.has(pHead)) return pHead;
  //     set.add(pHead);
  //     pHead=pHead.next;
  // }
  // return null;

  // 3. 快慢指针
  let slow = fast = pHead;
  while (slow != null && fast && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      let p = slow;
      while (p != pHead) {
        p = p.next;
        pHead = pHead.next;
      }
      return p;
    }
  }
  return null;
}
module.exports = {
  EntryNodeOfLoop: EntryNodeOfLoop,
};