class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
       let maxArea = 0
       let l = 0
       let r = heights.length - 1
       while(l < r){
        let ht = Math.min(heights[r], heights[l])
        maxArea = Math.max(maxArea,ht * (r - l))
        if(heights[r] > heights[l]){
            l++
        }else{
            r--
        }
       }
       return maxArea

    }
}

