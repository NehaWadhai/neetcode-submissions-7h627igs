class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
     minWindow(s,t){
    let l = 0
    let r =0
    let minL = 10000
    let count = 0
    let map = {}
    let startIndex = -1
    
    for(let i =0; i < t.length; i++){
        if(!map[t[i]]){
            map[t[i]] = 1
        }else {
             map[t[i]] += 1
        }
    }
    while(r < s.length){
        if(map[s[r]] > 0){
            count++
        }
            map[s[r]]--
        while(count == t.length){
            if(r - l +1 < minL){
                minL = r - l + 1// ADOBECODEBANC"
                startIndex = l
            }
            map[s[l]]++
           
            if(map[s[l]] > 0){
                count--
            }
            l++ 
        }
       
       r++
       
    }
       return startIndex == -1 ? "" : s.slice(startIndex, startIndex + minL)
    
}
}
