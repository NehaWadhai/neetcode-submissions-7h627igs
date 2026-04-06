class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let l =0 
        let countT = {}
        let window = {}      
            for(let c of t){
                if(!countT[c]){
                countT[c] = 1
                }else{
                    countT[c] +=1
                }
            }
        let have = 0
        let need = Object.keys(countT).length
        console.log('need',need)
        let res= [-1,-1]
        let resLength = Infinity;
       for(let r = 0; r < s.length ;r++){
            let c = s[r]
            if(!window[c]){
                window[c] = 1
            }else{      
                 window[c] +=1
            }
              if(window[c] === countT[c]){
                    have += 1
                } 
            while(have === need){
                
                if((r-l + 1) < resLength){
                    res = [l,r]
                    resLength = r - l + 1
                }
                console.log('in res',s[l] in countT, countT)
                window[s[l]] -= 1
                if(s[l] in countT && window[s[l]] < countT[s[l]]){
                    have -= 1
                }
                l++
                 
            }

       }
        return s.slice(res[0],res[1]+1)
    }
}
