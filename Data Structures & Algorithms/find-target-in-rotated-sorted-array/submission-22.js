class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target, l= 0, r = nums.length -1) {
        // let l = 0
        // let r = nums.length -1
        if(l > r){
            return -1
        }
        let mid = Math.floor((l + r)/2)
      
            //search in left sorted array
            if (nums[mid] == target) return mid
            if(nums[mid] >= nums[l]){
                if(target >= nums[l] && target <= nums[mid]){
                  return  this.search(nums,target,l, mid - 1)

                }else{
                  return  this.search(nums,target,mid + 1, r)
                }
            }else{
                if(target <= nums[r] && target >= nums[mid]){
                   return this.search(nums,target,mid + 1, r)

                }else{
                   return this.search(nums,target,l,mid -1)
                }
            }
        

    }
}
