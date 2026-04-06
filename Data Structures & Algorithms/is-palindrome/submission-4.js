class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphaNumeric(c){
        return(
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9') 
        )
    }
    isPalindrome(s) {
        let l = 0 
        let r = s.length -1
        while(l < r){
            while(l < r && !this.isAlphaNumeric(s[l])){
                console.log('alpha',s[l])
                l++
            }
             while(l < r && !this.isAlphaNumeric(s[r])){
                console.log('beta',s[r])
                r--
            }
            if(s[l].toLowerCase() !== s[r].toLowerCase() && this.isAlphaNumeric(s[r]) && this.isAlphaNumeric(s[l])){
                 console.log('r,l',s[r], s[l])
                return false
            }else{
                l++
                r--
            }
        }
        return true
    }
}
