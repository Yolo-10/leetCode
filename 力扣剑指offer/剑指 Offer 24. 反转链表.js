/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let pre = null
    while (head) {
        //tmp存放head的next
        let tmp = head.next
            //让head的next指向pre链表
        head.next = pre
            //head成为pre链表的头节点
        pre = head
            //轮转到原来链表的头节点的下一个
        head = tmp
    }
    return pre
};