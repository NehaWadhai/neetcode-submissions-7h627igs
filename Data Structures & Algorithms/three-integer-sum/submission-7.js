class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let map = new Set([])
        let res = []
        nums.sort((a,b) => (a - b))
        console.log('nums',nums)
      for(let i = 0; i < nums.length -2;i++){
        let l = i + 1
        let r = nums.length -1
        while(l < r){
            let target = nums[i]
            let sum = target + nums[l] + nums[r]
            if(sum > 0){
                r--
            }else if(sum < 0){
               l++
            }else if(sum === 0){
                let triplets = [nums[i],nums[l],nums[r]]
                let key = triplets.join('_')
                if(!map[key]){
                    res.push(triplets)
                    map[key] = 1
                } 
                l++
            r--   
            }
            
        }
        
        

      }
        return res

    }
}
