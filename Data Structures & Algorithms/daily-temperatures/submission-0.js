class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
           let a = temperatures
        let stack = []
         let res = []
        
for(let i = a.length-1 ; i >=0; i--){
     
  while(stack.length > 0 && a[i] >= a[stack[stack.length - 1]]){
      stack.pop()
  }
  if(stack.length > 0){
      res[i] = stack[stack.length -1] - i
  }else{
      res[i] = 0
  }
    stack.push(i)
   
}
 return res
}
}
