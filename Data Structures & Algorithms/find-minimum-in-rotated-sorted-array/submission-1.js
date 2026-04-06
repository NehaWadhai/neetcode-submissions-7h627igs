class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let res = nums[0] 
        let l = 0
        let r = nums.length -1 
        while (l < r) {
            let mid = Math.floor((l + r) / 2);

            if (nums[mid] > nums[r]) {
                // Minimum must be to the right of mid
                l = mid + 1;
            } else {
                // Minimum is at mid or to the left of mid
                r = mid;
            }
        }

        return nums[l];
        // return res
    }
}
