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
            let min = Math.min(heights[l],heights[r])
            maxArea = Math.max((min * (r-l)),maxArea)
            if(heights[l] < heights[r]){
                l++
            }else{
                r--
            }

        }
        return maxArea
    }
}

