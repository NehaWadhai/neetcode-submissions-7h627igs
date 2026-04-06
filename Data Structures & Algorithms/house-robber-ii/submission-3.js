class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
     robHouseHelper(nums){
             let robHouse = []
     
      robHouse[0] = nums[0]
      robHouse[1] = Math.max(nums[0],nums[1])
      for(let i =2 ;i < nums.length ; i++){
            robHouse[i] = Math.max(robHouse[i-2] + nums[i], robHouse[i-1])
      }
      console.log('robHouse',robHouse)
      return robHouse[nums.length-1] 

    }
    rob(nums) {
        if(nums.length === 1){
            return nums[0]
        }
            let skipFirst = nums.slice(1,nums.length)
            let skipLast = nums.slice(0,nums.length-1)
            let maxSkipFirst = this.robHouseHelper(skipFirst)
            let maxSkipLast = this.robHouseHelper(skipLast)
             console.log('maxSkipFirst',maxSkipLast,maxSkipFirst)

            return Math.max(maxSkipFirst,maxSkipLast)
    
    }
}
