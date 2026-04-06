class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack = []
        for(let i =0; i < s.length ;i++){
            if(s[i] == '{' || s[i] == '(' || s[i] == '['){
                stack.push(s[i])
            }else{
                if(stack.length > 0){
                    let char =  stack[stack.length-1]
                     stack.pop()
                    console.log(stack,char)
                 if(s[i] == '}' && char == '{' || 
                 s[i] == ')' && char == '('|| 
                 s[i] == ']' && char == '['){
                
                 }else{
                    return false
                 }   
                }else{
                    return false
                }
            }
        }
        return stack.length === 0
        

    }
}
