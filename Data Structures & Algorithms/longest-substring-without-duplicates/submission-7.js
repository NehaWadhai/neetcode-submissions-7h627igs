class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0
        let r = 0
        let map ={}
        let maxLength = 0
        while(r < s.length){
            let char = s[r]
            if(map[char] >= l){
               l =  map[char] + 1
            }
            map[char] = r
            console.log('maxLength',map)
            r++
            maxLength = Math.max((r-l),maxLength)
        }
        
        return maxLength
    }
}
