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
     * @return {boolean}
     */
    hasCycle(head) {
        let fp = head
        let sp = head

        while(fp !== null && fp.next !== null){
            fp = fp.next.next
            sp = sp.next
            if(fp == sp){
                return true
            }
        }
        return false
    }
}
