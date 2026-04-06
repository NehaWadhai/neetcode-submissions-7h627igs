class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        // for(let i = 0 ; i < nums.length; i++){
        //     map.set(nums[i], i)
        // }
        for(let i = 0 ; i < nums.length; i++){
            const secondnum = target - nums[i]
            if(map.has(secondnum)){
                return [i ,map.get(secondnum)]
            }else{
                 map.set(nums[i], i)
            }
        }
        
     
    }
}
