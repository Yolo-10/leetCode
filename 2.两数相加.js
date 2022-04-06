/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let n1 = 0,
        n2 = 0,
        summy = 0;
    l3 = new ListNode();
    root = l3;
    while (l1 != null || l2 != null) {
        if (l1 == null) {
            n1 = 0;
        } else {
            n1 = l1.val;
            l1 = l1.next;
        }

        if (l2 == null) {
            n2 = 0;
        } else {
            n2 = l2.val;
            l2 = l2.next;
        }

        temp = new ListNode((summy + n1 + n2) % 10);
        summy = parseInt((n1 + n2) / 10);
        l3.next = temp;
        l3 = l3.next;
    }
    return root.next;
};