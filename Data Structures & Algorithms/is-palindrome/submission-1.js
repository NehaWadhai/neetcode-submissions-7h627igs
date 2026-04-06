class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
 const regex = /[^a-zA-Z0-9]/g
    const clean = s.replace(regex, '').toLowerCase()
     let l =0 
    let r = clean.length - 1
     
    while(l <= r){
        if(clean[l] == clean[r]){
            l++
            r--
        }else{
            return false
        }
       
    }
 return true
    }
}
