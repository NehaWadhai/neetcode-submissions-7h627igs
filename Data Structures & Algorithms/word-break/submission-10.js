class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
     let map = new Set(wordDict)
     let maxLength = 0
     for(let c of map){
        console.log('cc',c)
        maxLength = Math.max(maxLength, c.length)
     }
     let arr = Array.from({length : s.length + 1}).fill(false )
     arr[0] = true
     for(let i = 1 ; i <= s.length; i++){
        for(let j = i -1; j >= 0 && j >= i - maxLength; j--){
            console.log('s.substring(j,i',s.substring(j,i))
            if(map.has(s.substring(j,i)) && arr[j]){
                    arr[i] = true
                    break
            }
        }
     }
     console.log(arr)
     return arr[s.length]
    }
}
