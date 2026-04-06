class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphaNumeric(c){
        return( 
            (c >= 'a' && c <= 'z') ||
            (c >= 'A' && c <= 'Z') ||
            (c >= '0' && c <= '9')
        )
    }
    isPalindrome(s) {
        let l = 0 
        let r = s.length -1
        while(l < r){
             console.log('clr', s[l], s[r])
            while(l < r && !this.isAlphaNumeric(s[l])){
                console.log('c1', s[l])
                l++
            }
            while(l < r && !this.isAlphaNumeric(s[r])){
                console.log('c2', s[r])
                r--
            }
            if(s[l].toLowerCase() !== s[r].toLowerCase()){
                console.log('ccc', s[l],s[r])
                return false
            }
            l++
            r--

        }
        return true
    
    }
}
