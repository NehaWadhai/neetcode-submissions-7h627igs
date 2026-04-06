class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

   
    countSubstrings(s) {
        let count = 0
      for(let i = 0 ; i < s.length;i++){
         let j = i
         let k = i
         while(j >= 0 && s.charAt(j) === s.charAt(k)){
            j--
            k++
            count++
         }

         k= i +1
         j = i
          while(j >= 0 && s.charAt(j) === s.charAt(k)){
            j--
            k++
            count++
         }
      }
      return count
    }
}
