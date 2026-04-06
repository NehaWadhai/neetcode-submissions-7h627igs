class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
          let ws = 0
    let maxLength = 0
    let mostCommon = 0
    let map = {}
    
    for(let we=0; we < s.length ; we++){
        if(!map[s[we]]){
            map[s[we]] = 1
        }else{
            map[s[we]] +=1
        }
    mostCommon = Math.max(mostCommon, map[s[we]])
    if(we - ws + 1 - mostCommon > k){
        map[s[ws]]--
        ws++
    }
    maxLength = Math.max(we - ws + 1 ,maxLength)
    console.log(maxLength)
    
    }
    return maxLength
    }
}
