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
             if(!this.isAlphaNumeric(s.charAt(l))){
            console.log('is alphanume', this.isAlphaNumeric(s.charAt(l)))

                l++
            }
             if(!this.isAlphaNumeric(s.charAt(r))){
            console.log('is alphanume 2', this.isAlphaNumeric(s.charAt(r)))

                r--
            }
            console.log(s.charAt(l).toLowerCase(),s.charAt(s).toLowerCase())
            if(this.isAlphaNumeric(s.charAt(l)) && this.isAlphaNumeric(s.charAt(r))){
            if(s.charAt(l).toLowerCase() === s.charAt(r).toLowerCase()){
                    l++
                    r--
            console.log(l,s)

                }else{
                    return false
                }
            }
           
        }
        return true
    
    }
}
