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
            let width = r - l 
            let ht = Math.min(heights[l], heights[r])
            maxArea = Math.max((width * ht), maxArea)
            if(heights[l]> heights[r]){
                r--
            }else{
                l++
            }
        }
        return maxArea
    }
}
