class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      let s1 = {}
      let s2 = {}
    if(!s.length || !t.length) return false
    if(s.length !== t.length) return false
      for(let key in s){
        let char = s[key]
        if(!s1[char]){
            s1[char] = 1
        }else{
             s1[char] += 1
        }
      }

      for(let key in t){
        let char = t[key]
        if(!s2[char]){
            s2[char] = 1
        }else{
             s2[char] += 1
        }
      }
      
      for(let key in s1){
        let char = s1[key]
       console.log('s1[char] ', key,s2)
       
        if(s1[key] !== s2[key]){
            return false
        }
      }

      return true
    }
}
