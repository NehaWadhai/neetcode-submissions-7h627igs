class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        for(let i =0 ; i < tokens.length; i++){
             
            if(tokens[i] === '+' ||
               tokens[i] === '-' ||
               tokens[i] === '*' ||
               tokens[i] === '/' )
               {
                console.log("stack1:", stack)
                let a = stack.pop()
                let b = stack.pop()
            switch(tokens[i]){
                case '+':
                 stack.push(a + b)
                 break
                case '-':
                 stack.push((b - a))
                 break
                 case '*':
                 stack.push(a * b)
                 break
                 case '/':
                 console.log(a/b)
                 stack.push(Math.trunc(b/a))
                
            }
            }else{
                console.log("stack:", stack)
                stack.push(parseInt(tokens[i]))
            }
        }
        
        return stack[0]
    }
}
