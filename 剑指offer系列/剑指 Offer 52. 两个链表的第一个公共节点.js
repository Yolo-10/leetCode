/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    //双指针
    //  if (!headA || !headB) return null;
    // let pa = headA,
    //     pb = headB;
    // while (pa !== pb) {
    //     pa = (pa === null) ? headB : pa.next;
    //     pb = (pb === null) ? headA : pb.next;
    // }
    // return pa;

    //哈希表
    const hash = new Set();
    while (headA != null) {
        hash.add(headA);
        headA = headA.next;
    }

    while (headB != null) {
        if (hash.has(headB)) {
            return headB;
        }
        headB = headB.next;
    }
    return null;
};