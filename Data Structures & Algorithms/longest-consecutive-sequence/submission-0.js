class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
         const arr = new Set(nums)
        let longest = 0
         let length = 0
        for(let i =0; i < nums.length; i++){
            let n = nums[i]
            if(!arr.has(nums[i] -1)){
                 length = 1
            
           
            while(arr.has(n + length)){
                  console.log(parseInt(n  + 1 ),length)
                length +=1
            }
             longest = Math.max(length, longest)
            } 
        }
        return longest
    }
}
