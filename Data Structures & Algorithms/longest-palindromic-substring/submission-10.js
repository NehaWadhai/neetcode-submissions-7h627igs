class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let longest = 0
        let lsp = ''
        for(let i = 0 ; i < s.length; i++){
            //for odd length

            let j = i 
            let k = i
            while(j >=0 && s.charAt(j) === s.charAt(k)){
                j--
                k++
                let str = s.substring(j+1, k)
                console.log('str',str)
                if(str.length > longest){
                    longest = str.length
                    lsp = str
                }
            }
            j = i+1
            k = i
            while(j >=0 && s.charAt(j) === s.charAt(k)){
                j--
                k++
                let str = s.substring(j+1, k)
                console.log('str',str)
                if(str.length > longest){
                    longest = str.length
                    lsp = str
                }
            }
        }

        return lsp
    }
}
