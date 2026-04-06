class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length > s.length) return ""
       let l = 0
       let res = [-1,-1]
       let resLength = Infinity
       let countT = {}
       for(let c of t){
        console.log('countT',c)
        if(!countT[c]){
            countT[c] = 1
        }else{
            countT[c] += 1
        } 
       }
      let need = Object.keys(countT).length
      let have = 0
      let windowL = {}
       for(let r = 0; r < s.length ; r++){
        let char = s[r]
            if(!windowL[char]){
                windowL[char] = 1
            }else{
                windowL[char] += 1
            }
            if(windowL[char] === countT[char]){
                have += 1
            }
            while(have === need){
                if((r -l + 1) < resLength){
                    res = [l,r]
                    resLength = r- l + 1
                    
                }
                windowL[s[l]] -= 1
                if( s[l] in  countT && windowL[s[l]] < countT[s[l]]){
                        have -= 1
                }
                l++

            }
             console.log('l,r',l,r)

       }

       console.log('sub', s.substring(res[0] ,res[1]+ 1))
       return s.substring(res[0] ,res[1]+ 1) 
    }
}
