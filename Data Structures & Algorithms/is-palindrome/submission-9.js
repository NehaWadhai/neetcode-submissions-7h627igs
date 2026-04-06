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
     let r = s.length - 1 
     while(l < r){
        console.log('ssss',this.isAlphaNumeric(s.charAt(l)),s.charAt(l))
        if(this.isAlphaNumeric(s.charAt(l)) && this.isAlphaNumeric(s.charAt(r))){
            if(s.charAt(l).toLowerCase() === s.charAt(r).toLowerCase()){
                l++
                r--
            }else{
              
                return false
            }
        }
        if(!this.isAlphaNumeric(s.charAt(l))){
            l++
        }
        if(!this.isAlphaNumeric(s.charAt(r))){
            r--
        }

     }
     return true
    
    }
}
