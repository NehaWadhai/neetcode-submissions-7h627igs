class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
       let n = s.length
       let arr = Array(n+1).fill(false)
       let maxLength = 0 
       const map = new Set(wordDict)
       for(let c of wordDict){
            maxLength = Math.max(c.length,maxLength)
       }
       arr[0] = true
       for(let i =1; i <= n ;i++){ 
        for(let j = i - 1; j >= i - maxLength && j >= 0 ;j--){
            console.log('in loop1',j,i)
            console.log('map',s.substring(j,i))
            if(map.has(s.substring(j,i)) && arr[j]){
               arr[i] = true 
               break
            }
        }

       }
       return arr[n]
            
        
          

     
    }
}
