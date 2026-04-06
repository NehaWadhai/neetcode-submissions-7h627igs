class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        // Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const a = nums.sort((a,b) => a-b)
   
  let found = []
    for(let i =0 ;i < nums.length ; i++){
        if(i > 0 && a[i] === a[i-1]){
            continue
        }
         let l = i+1
        let r = nums.length -1 
        while(l < r){
        let sum = a[i] + a[l] + a[r]
         
        if(sum > 0){
            r--
        }else if(sum < 0){
            l++
        }else if(sum == 0){
            // let b = [a[i],a[l], a[r]]
            found.push([a[i],a[l],a[r]])
            while(a[l] === a[l+1] ) l++
            while(a[r] === a[r+1] ) r--
            l++
            r--
        }
        }
      
    }

return found

}
}
