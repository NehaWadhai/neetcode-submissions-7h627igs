class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mid = Math.ceil(nums.length / 2)
        console.log('mid',mid)
        let map = new Map();
        for(let i =0 ; i< nums.length; i++){
            let diff = target - nums[i]
            if(map.has(diff)){
              return [map.get(diff),i]
            }else{
                map.set(nums[i], i)
            }
        }
return []
    }
}
