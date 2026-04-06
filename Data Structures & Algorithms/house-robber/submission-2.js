class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
      let robHouse = []
     
      robHouse[0] = nums[0]
      robHouse[1] = Math.max(nums[0],nums[1])
      for(let i =2 ;i < nums.length ; i++){
            robHouse[i] = Math.max(robHouse[i-2] + nums[i], robHouse[i-1])
      }
      console.log('robHouse',robHouse)
      return robHouse[nums.length-1]
    }
}
