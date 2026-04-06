class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
       let l = 0
       let r = 0
       let maxwindow = 0
       let map = {}
       let maxFreq = 0
       let wl
       while(r < s.length){
            let char = s[r]
            if(!map[char]){
                map[char] = 1
            }else{
                map[char] += 1
            }
            maxFreq = Math.max(maxFreq, map[char])
            wl = r -l + 1

            if(wl - maxFreq > k){
                map[s[l]] -= 1
                l++
              
            }
              wl = r -l + 1
            maxwindow = Math.max(maxwindow, wl)
            r++

       }
       return maxwindow
    }
}
