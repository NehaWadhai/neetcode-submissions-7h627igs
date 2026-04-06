class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
 let l = 0 
    let r = numbers.length - 1
    for(let i =0 ; i < numbers.length ; i++){
       let sum = numbers[l] + numbers[r]
        console.log(l,r,sum)
       if(sum > target){
           r--
       }else if(sum < target){
           l++
       }else if(sum == target){
          
           return [l+1, r+1]
       }
    }
        
    }
}
