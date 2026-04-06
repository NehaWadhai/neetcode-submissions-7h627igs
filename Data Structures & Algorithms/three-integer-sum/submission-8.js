class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let map = new Set([])
        let res = []
         
        nums.sort((a,b) => a-b)
        for(let i =0 ; i < nums.length-2; i++){
               let l = i + 1
                let r = nums.length - 1
                while(l < r){
                let diff = nums[l] + nums[r]
                let sum = nums[i] + diff
                if(sum < 0){
                    l++
                }else if(sum > 0){
                   r--
                }else if(sum === 0){
                    const triplets = [nums[i], nums[l], nums[r]]
                    const key = triplets.join('_')
                    if(!map[key]){
                        map[key] = 1
                        res.push(triplets)
                    }
                    l++
                    r--
                }
                }
                
                
        }
        console.log('map',map)
        return res
      
    }
}
