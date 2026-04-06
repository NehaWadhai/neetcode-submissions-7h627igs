class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
     productExceptSelf(nums){
     let p = []
     let s = []
     let result = []
     
     for(let i = 0; i < nums.length ; i++){
         if(i == 0){
          p.push(1)
         }else{
            p[i] = p[i-1] * nums[i-1] 
         }
     }
     console.log(p)
     for(let i = nums.length - 1; i >= 0 ; i--){
         
         if(i == nums.length - 1){
             
         s[i] = 1
          
         }else{
             
            s[i] = s[i+1] * nums[i+1] 
         }
     }
     for(let i =0 ; i < nums.length ; i++){
         result[i] = p[i] * s[i]
     }
     return result
     
 }

}