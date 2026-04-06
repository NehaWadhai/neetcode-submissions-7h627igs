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
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head.next
        while(fast !== null && fast.next !== null){
            slow = slow.next
            fast = fast.next.next
        }

        //reverse second list
        let secondhead  = slow.next 
        let prev = (slow.next = null);
        
        while(secondhead){
            let p = secondhead.next
            secondhead.next = prev 
            prev = secondhead
            secondhead = p
        }
        let first = head
        secondhead = prev
        while(secondhead !== null){
            const temp1 = first.next
            const temp2 = secondhead.next
            first.next = secondhead
            secondhead.next = temp1
            first = temp1
            secondhead = temp2
        }
        return head
    }
}
