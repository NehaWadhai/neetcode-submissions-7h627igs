class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength = 0
        let l = 0
        let r = 0
        let map ={}
        let windowLength = 0
        while(r < s.length){
            let c = s[r]
            if(map[c] >= l){
                l = map[c] + 1
            }
            map[c] = r
            maxLength = Math.max((r-l +1),maxLength)
            r++
            

        }
        return maxLength
    }
}
