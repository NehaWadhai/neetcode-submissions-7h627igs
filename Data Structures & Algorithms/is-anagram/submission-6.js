class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      let s1 = {}
      let s2 = {}
      if(s.length !== t.length){
        return false
      }
      for(let char of s){
        if(!s1[char]){
          s1[char] = 1
        }else{
          s1[char] += 1
        }
      }

 for(let char of t){
        if(!s2[char]){
          s2[char] = 1
        }else{
          s2[char] += 1
        }
      }
  for(let char in s1){
    if(s1[char] !== s2[char]) return false
  }
 return true
    }
 
}
