class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0
        let r = heights.length -1
        let l = 0
        while(l < r){
            let minHt = Math.min(heights[l], heights[r])
            let width = r - l
            maxArea = Math.max(maxArea, (minHt * width))
            if(heights[l] < heights[r]){
                l++
            }else{
                r--
            }
        }
        return maxArea
    }
}
