class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
     let maxLength = 0
     let l = 0
     let map = {}
     let r = 0
     while(r < s.length){
        let char = s[r]
        console.log(map[char])
        if(map[char] >= l){
            l = map[char] + 1
        }
        map[char] = r
        maxLength = Math.max(maxLength, (r - l) + 1)
        r++

        
     }
     return maxLength
     
    }
}
