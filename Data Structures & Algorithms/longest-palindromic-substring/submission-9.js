class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let longest = 0
        let lsp = ''
        for(let k = 0; k < s.length;k++){
            let i = k
            let j = k
            //for odd length    
        while(i >= 0 && j <s.length && s.charAt(i) == s.charAt(j)){
            i--
            j++
            let string = s.substring(i+1,j)
                if(string.length >= longest){
                    longest = string.length
                    lsp = string
                }
            }
            console.log('lps',lsp,longest)
            //for even length
            i = k + 1
            j = k
            while(i >= 0 && j <s.length && s.charAt(i) == s.charAt(j)){
                i--
                j++
                let string = s.substring(i+1,j)
                    if(string.length > longest){
                        longest = string.length
                        lsp = string
                    }
                }
        }
         console.log('lps2',lsp,longest)
        return lsp
    }
}
