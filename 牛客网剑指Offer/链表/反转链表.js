/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
  // write code here
  let cur = pHead,
    res = null;
  while (cur != null) {
    //let tmp = cur.next;  //暂时保存next
    //cur.next = res;    //更改当前节点的next;
    //res = cur;        //更新res
    //cur = tmp;      //继续遍历
    //结构赋值，不考虑赋值顺序，无需格外定义tmp
    [cur.next, res, cur] = [res, cur, cur.next];
  }
  return res;
}

module.exports = {
  ReverseList: ReverseList,
};