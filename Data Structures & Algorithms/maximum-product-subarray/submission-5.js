class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let l = 1
        let r = 1
        let ans = nums[0]
        let n = nums.length

        for(let i = 0; i < nums.length ; i++){
           
            l *= nums[i]
            r *= nums[n - 1 - i]
            
            ans = Math.max(ans, Math.max(l,r))
             l = l == 0 ? 1 : l
            r = r == 0 ? 1 : r
        }
        return ans === -0 ? 0 : ans
    }
}
