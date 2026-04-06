class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

         let left =0 
    let right = 0
    let map = {}
    let maxlength = 0
    for(right ; right < s.length ; right++){
       
        let currChar = s[right]
        while(map[currChar] !== undefined){
            let charToBeRemoved = s[left]
            delete map[charToBeRemoved]
            left = left + 1 
        }
        map[currChar] = right
         console.log(map)
        maxlength = Math.max(maxlength, right - left +1)
        
    }
    return maxlength
    }
}
