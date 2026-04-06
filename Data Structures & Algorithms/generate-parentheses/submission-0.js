class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */

    backTrack(stack,openN,closedN,n,res){
        if(openN === n && closedN === n){
            console.log(stack)
            res.push(stack)
            return
        }
        if(openN < n){
            this.backTrack(stack + '(' , openN +1,closedN,n,res)
        }
         if(closedN < openN){
            this.backTrack(stack + ')' , openN ,closedN + 1,n,res)
        }
    }
    generateParenthesis(n) {
        const res = []
        this.backTrack('',0,0,n,res)
        return res 
    }
    
}
