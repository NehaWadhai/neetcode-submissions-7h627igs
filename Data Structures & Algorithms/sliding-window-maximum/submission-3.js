class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const q = new Deque()
        const result = new Array (nums.length - k +1)
        let j = 0
        for(let i =0 ; i < nums.length; i++){
            while(q.size() && nums[q.back()] < nums[i]){
                q.popBack()
            }
            q.pushBack(i)

            if(i >= q.front() + k){
                q.popFront()
            }
            if(i+1 >= k){
                result[j] = nums[q.front()]
                j++
            }
        }
        return result

    }
}
