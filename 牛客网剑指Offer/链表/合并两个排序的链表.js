function ListNode(x) {
  this.val = x;
  this.next = null;
}

function Merge(pHead1, pHead2) {
  // write code here
  let head = (prev = new ListNode(0));
  while (pHead1 != null && pHead2 != null) {
    if (pHead1.val < pHead2.val) {
      prev.next = pHead1;
      pHead1 = pHead1.next;
    } else {
      prev.next = pHead2;
      pHead2 = pHead2.next;
    }
    prev = prev.next;
  }
  if (pHead1 != null) prev.next = pHead1;
  if (pHead2 != null) prev.next = pHead2;
  return head.next;
}

//迭代法
// function Merge(pHead1, pHead2) {
//   // write code here
//   if (pHead1 == null) return pHead2;
//   if (pHead2 == null) return pHead1;
//   if (pHead1.val < pHead2.val) {
//     pHead1.next = Merge(pHead1.next, pHead2);
//     return pHead1;
//   } else {
//     pHead2.next = Merge(pHead2.next, pHead1);
//     return pHead2;
//   }
// }

module.exports = {
  Merge: Merge,
};