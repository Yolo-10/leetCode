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
    if (!headA || !headB) return null;
    let pa = headA,
        pb = headB;
    while (pa !== pb) {
        //假设a公共节点前有2个节点，b有3个；要想让pa,pb同时到公共节点
        //那就让a再走一次b，b走一次a
        pa = (pa === null) ? headB : pa.next;
        pb = (pb === null) ? headA : pb.next;
    }
    return pa;

    //哈希表
    // const hash = new Set();
    // while (headA != null) {
    //     //哈希表内存放的是指针，是listNode
    //     hash.add(headA);
    //     headA = headA.next;
    // }

    // while (headB != null) {
    //     //判断哈希表内是否存在跟headB一样的listNode
    //     if (hash.has(headB)) {
    //         return headB;
    //     }
    //     headB = headB.next;
    // }
    // return null;
};