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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeTwoList(l1,l2){
        let dummyNode = { val : 0, next:null}
        let newlist = dummyNode
        while(l1 && l2){
            if(l1.val < l2.val){
                newlist.next = l1
                l1  = l1.next
            }else{
                newlist.next = l2
                l2 = l2.next
            }
            newlist = newlist.next
        }

        if(l1 === null){
            newlist.next = l2
        }else{
            newlist.next = l1
        }
        return dummyNode.next

    }
    mergeKLists(lists) {
        if(lists.length === 0 || lists === null) return null
        console.log('listss',lists)
        while(lists.length > 1){
            let mergedList = []
            for(let i = 0; i< lists.length; i+=2){
            
            let l1 = lists[i]
            let l2 = i+1 <  lists.length ? lists[i+1] : null
            mergedList.push(this.mergeTwoList(l1,l2))
            }
           lists = mergedList
        }

        return lists[0]

    }
}
