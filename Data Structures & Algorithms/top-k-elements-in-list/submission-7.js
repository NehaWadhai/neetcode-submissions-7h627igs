class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       let map = {}
       for(let i=0; i < nums.length ; i++){
         if(!map[nums[i]]){
                map[nums[i]] = 1
         }else{
            map[nums[i]] += 1
         }
       }
         console.log('map',map)
       let freq = Array.from({length :nums.length + 1},()=>[])
       for(let c in map){
        freq[map[c]].push(parseInt(c))
        
       }
        let res = []
       for(let i = freq.length - 1 ; i > 0; i--){
           for(let c of freq[i]){
            res.push(c);
            if(res.length === k){
                return res
            }
           }
       }
       console.log('freq',freq)
       
    }
}
