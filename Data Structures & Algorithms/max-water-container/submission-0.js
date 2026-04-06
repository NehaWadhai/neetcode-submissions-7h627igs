class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

let lp = 0
let rp = heights.length - 1
let ans = 0

while(lp < rp){
let width = rp - lp
let ht = Math.min(heights[lp],heights[rp])
let area = width * ht
ans = Math.max(ans,area)

if(heights[lp] < heights[rp]){
    lp++
}else{
    rp--
}

}
  return ans
    }
}
