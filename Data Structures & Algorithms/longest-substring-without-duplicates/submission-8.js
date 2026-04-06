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
            let c = s[r]
            if(map[c] >= l){
               l = map[c] + 1
            }
            map[c] = r
            maxLength = Math.max(maxLength, (r -l + 1))
            r++
            console.log('rt',r-l + 1)
            
        }


        return maxLength
    }
}
