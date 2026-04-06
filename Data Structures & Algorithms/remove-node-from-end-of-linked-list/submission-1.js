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

        let dummyNode = new ListNode(0,head)
        dummyNode.next = head
        console.log(dummyNode)
        let firstPointer = dummyNode
        let secondPointer = dummyNode
        
        for(let i =0 ; i <n;i++){
           secondPointer = secondPointer.next 
        }
        while(secondPointer.next && secondPointer.next !== null){
            firstPointer = firstPointer.next
            secondPointer = secondPointer.next
        }
      

        firstPointer.next = firstPointer.next.next
        return dummyNode.next


    }
}
