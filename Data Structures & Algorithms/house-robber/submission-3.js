class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
     if(nums.length < 2) return nums[0]
     let maxRob = 0
     let arr = Array.from({length : nums.length}).fill(0)
     arr[0] = nums[0]
     arr[1] = Math.max(nums[0],nums[1])
     for(let i = 2; i < nums.length; i++){
      arr[i] = Math.max((arr[i-2] + nums[i]), arr[i-1])
     }
     return arr[nums.length-1]
    }
}
