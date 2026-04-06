class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0
        let maxFreq = 0
        let map = {}
        let maxWindow = 0
        let wl 
        for(let r =0 ; r < s.length; r++){
            let char = s[r]
            if(!map[char]){
              map[char] = 1 
            }else{
              map[char] += 1
            }
          maxFreq = Math.max(maxFreq,map[char])
           wl = r - l + 1
           if(wl - maxFreq > k){
            map[s[l]]--
            l++
           }
           wl = r -l + 1
           maxWindow = Math.max(maxWindow,wl)
        }

        return maxWindow
    }
}
