/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    if (!head) return [];
    let len = 0;
    while (head) {
        len++;
        head = head.next
    }
    let index = len - k,
        cnt = 0;
    while (head) {
        cnt++;
        if (cnt == index) return head;
        head = head.next;
    }
};