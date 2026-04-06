class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0
        let r = nums.length -1
        let mid = Math.floor((l + r) / 2)
        while(l < r){
         mid = Math.floor((l + r )/ 2)
         console.log('mid',mid)
        if(nums[mid] > nums[r]){
            l = mid + 1
        }else{
            r = mid
        }
        
        }
        return nums[l]
    }
}
