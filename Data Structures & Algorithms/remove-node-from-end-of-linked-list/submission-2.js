/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummyNode = {val: 0 ,next : null}
        dummyNode.next = head
        let fp = dummyNode
        let sp = dummyNode

        for(let i=0; i < n ; i++){
            sp = sp.next
        }
        while(sp.next !== null){
            fp = fp.next
            sp = sp.next
        }
        fp.next = fp.next.next
        return dummyNode.next
    }
}
