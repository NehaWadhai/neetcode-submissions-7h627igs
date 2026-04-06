class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
    if(nums.length == 1){
        return 1 
    }
       let max = 0
       let arr = Array(nums.length).fill(1)
       for(let i = 1; i < nums.length;i++){
           for (let j = 0 ; j <= i ; j++){
         console.log('i,j',nums[i],nums[j])
                if(nums[i] > nums[j]){ 
                    if( arr[j] + 1 > arr[i]){
                         arr[i] = arr[j] + 1
                    }   
                   
                    
                }
                max = Math.max(max,arr[i]) 
            }
            
       }
       console.log('max',max,arr)
       return max
    }
}
