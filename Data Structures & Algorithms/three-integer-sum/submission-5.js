class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let map = new Set([])
        let res = []
        nums.sort((a,b) => a-b)
        console.log('sort',nums)
        for(let i =0; i < nums.length -2 ; i++){
            let target = nums[i]
            let l = i + 1
            let r = nums.length - 1
            while(l < r){
                let sum = nums[l] + nums[r] + target
                if(sum > 0){
                    r--
                }else if(sum < 0){
                    l++
                }else{
                    const triplet = [nums[l],nums[r],nums[i]]
                    const key = triplet.join(',')
                    if(!map.has(key)){
                        res.push([nums[l],nums[r],nums[i]])
                        map.add(key)
                    }
                   
                    l++
                    r--
                }
            }
            
        }
        return res

    }
}
