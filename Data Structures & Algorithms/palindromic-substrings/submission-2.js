class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

   
    countSubstrings(s) {
        let count = 0
      for(let i = 0 ; i < s.length ; i++){
        // for eevn
        let j = i
         let k = i
         
         while(j >= 0 && k < s.length && s.charAt(j) === s.charAt(k)){
            count++
            j--
            k++
            console.log('count1',s.charAt(j),s.charAt(k))
         }

          j = i 
          k = i + 1
         
         while(j >= 0 && k < s.length && s.charAt(j) === s.charAt(k)){
            count++
            j--
            k++
            console.log('count2',s.charAt(j),s.charAt(k))
         }
      }
      console.log('count',count)
      return count
    }
}
