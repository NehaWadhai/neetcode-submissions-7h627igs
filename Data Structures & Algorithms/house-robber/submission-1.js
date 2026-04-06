class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let robbedHouse = []
        if (nums.length < 2) return nums[0]
        if (nums.length < 3) return Math.max(nums[0], nums[1])
        robbedHouse[0] = nums[0]
        robbedHouse[1] = Math.max(nums[0], nums[1])
        for(let i =2; i < nums.length ; i++){
            // 2 9 8 3 6  rh - 2 9
            //2 
        robbedHouse[i] = Math.max((robbedHouse[i-2]+nums[i]),robbedHouse[i-1])
        }

        return robbedHouse[nums.length - 1]
    }
}
