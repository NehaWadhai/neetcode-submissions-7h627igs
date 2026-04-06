class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack =[]
        let maxArea = 0
        let start = 0
        for(let i =0; i < heights.length ;i++){
            start = i
            if(stack.length == 0){
                stack.push([i,heights[i]])
            }
             console.log(stack[stack.length -1][1])
             while (stack.length > 0 && heights[i] < stack[stack.length - 1][1]) {
              const [index, ht] =  stack.pop()
               console.log('index',index,ht)
              maxArea = Math.max(maxArea, ht * (i -  index))
               start = index
            }
           
              stack.push([start,heights[i]])

             
        }
    while(stack.length >0){
             const [index, ht] =  stack.pop()
             
              maxArea = Math.max(maxArea, ht * (heights.length -  index))
        }
       
       console.log("maxArea",maxArea)
       return maxArea
    }
    
}
