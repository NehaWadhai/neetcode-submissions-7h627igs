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
        let p1 = head 
        let p2 = head
        while(p2 && p2.next){
                p1 = p1.next
                p2 = p2.next.next
        }
        let curr = p1.next
        p1.next = null
        // 2 4 8 6  // p1 -- 2 / prev -- 8
        let prev = null
        while(curr){
            let next = curr.next 
            curr.next = prev
            prev = curr
            curr =next 

        }
        let h1 = head
        let h2 = prev
        while(h2 !== null){
            let temp = h1.next
            h1.next = h2
            h1 = h2
            h2 = temp
        }
      
        console.log("p1",prev)
    }
}
