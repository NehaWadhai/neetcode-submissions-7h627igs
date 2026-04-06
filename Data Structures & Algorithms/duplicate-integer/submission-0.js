class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const newArr = new Set(nums)
       return newArr.size < nums.length

    }
}
