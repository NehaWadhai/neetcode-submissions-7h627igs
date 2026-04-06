class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0
        
        let map = {}
        let maxLength = 0
        for(let r= 0; r < s.length ; r++){
            let char = s[r]
            if(map[char] >= l){
                l = map[char] + 1
            }
            map[char] = r
           
            
            maxLength = Math.max((r-l + 1),maxLength)
        }
        return maxLength
    }
}
