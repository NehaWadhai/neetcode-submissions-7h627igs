class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashMap = {}
        for(let i =0; i < nums.length;i++){
            if(!hashMap[nums[i]]){
                hashMap[nums[i]] = 1
            }else{
                hashMap[nums[i]] += 1
            }
        }
        let freq = Array.from({length: nums.length + 1},() =>[])
        for(let c in hashMap){
           freq[hashMap[c]].push(parseInt(c))    
        }
        let res = []
        for(let i = freq.length -1 ; i > 0; i--){
            for(let c of freq[i]){
                console.log('freq',c)
                res.push(c)
                if(res.length === k){
                    return res
                }
            }
        }
        
        console.log(hashMap)
    }
}
