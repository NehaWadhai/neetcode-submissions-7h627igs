class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
     let l = 0
     let r = 0
     let maxLength = 0
        let map ={}
     while(r < s.length){
        let char = s[r]
        if(map[char] >= l){
            l = map[char] + 1
        }
        map[char] = r
        maxLength = Math.max(maxLength, (r-l) + 1)
        r++
     }
     return maxLength
    }
}
