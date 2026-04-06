class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let n = nums.length
        let arr = Array(n).fill(1)

        for(let i =1; i < n ; i++){
            for(let j = 0 ; j < i; j++){
                if(nums[j] < nums[i]){
                    if(arr[j] + 1 > arr[i]){
                        arr[i] += 1
                    }
                    
                }
            }
        }
        let max = 0
        for(let i=0 ; i < n ;i++){
            max = Math.max(arr[i], max)
        }
        return max
        console.log('arr',arr,max)
    }
}
