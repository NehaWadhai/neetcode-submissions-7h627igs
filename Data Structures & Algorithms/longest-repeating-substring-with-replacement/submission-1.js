class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0
        let maxFreq = 0
        let maxWindow = 0
        let freq = {}
        for(let r = 0 ; r < s.length; r++){
            let c = s[r]
            if(!freq[c]){
                freq[c] = 1
            }else{
                freq[c] += 1
            }
            maxFreq = Math.max(freq[c], maxFreq)
           let wl = r - l + 1
             console.log('freq1',freq)
            if((wl - maxFreq) > k){
                freq[s[l]]--
                console.log('freq',freq)
                l++
            }
            wl = r - l + 1 
             maxWindow = Math.max(wl, maxWindow)
        }
        console.log('maxWindow',maxWindow)
        return maxWindow
    }
}
