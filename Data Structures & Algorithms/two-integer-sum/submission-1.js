class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    let start = 0
    let end = nums.length - 1
    let sum = 0
    // let arr = []
    //     while(start < end){ 
    //         sum = nums[start] + nums[end]
    //         if(sum < target){
    //             start++
    //         }else if(sum > target){
    //             end--
    //         }else if(sum === target){
    //             return [start,end]
    //         }else{
    //             return [-1,-1]
    //         }
    //         // return false
    //     }  
    //     return arr 
     const prevMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (prevMap.has(diff)) {
                return [prevMap.get(diff), i];
            }

            prevMap.set(nums[i], i);
        }

        return [];
    }
}
