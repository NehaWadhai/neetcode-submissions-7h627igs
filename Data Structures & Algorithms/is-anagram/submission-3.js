class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
     isAnagram(s, t) {
      if (s.length !== t.length) {
            return false;
        }
        if(s.length !== t.length) return false
      const map = {}
     
      for(let i = 0 ; i < s.length ; i++){
          let char = s[i]
          if(!map[char]){
              map[char] = 1
          }else{
              map[char]++
          }
      }
 
    for(let j =0; j < t.length ; j++){
        let char = t[j]
        if(!map[char]){
            map[char] = 1
        }else{
            map[char]--
        }
        if(map[char] == 0){
            delete map[char]
        }
        
    }
    return Object.keys(map).length === 0
    }

}
