class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
       let l = 1
       let r = 1
       let max = -10000
       for(let i =0; i < nums.length;i++){
         l *= nums[i]
         r *= nums[nums.length - 1 -i]
         console.log('l1,r',l,r,max)
        max = Math.max(l ,r,max)
         l = (l === 0 || l === -0) ? 1 : l
         r = (r === 0 || r === -0) ? 1 : r
         console.log('l,r',l,r,max)
       }
       return max === -0 ? 0 : max
    }
}
