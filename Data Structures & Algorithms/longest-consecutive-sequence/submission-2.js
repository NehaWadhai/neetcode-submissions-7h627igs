class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      let map = new Map()
      let longS = 0
      for(let n in nums){
        map.set(nums[n],false)
      }

      for(let i=0; i< nums.length;i++){
        let currentLength = 1
        let nextNum = nums[i] + 1
        while(map.has(nextNum) && !map.get(nextNum)){
            map.set(nextNum,true)
            nextNum++
            currentLength++
        }

        let prevNum = nums[i] - 1
         while(map.has(prevNum) && !map.get(prevNum)){
            map.set(prevNum,true)
            prevNum--
            currentLength++
        }

        longS = Math.max(longS,currentLength)
      }
        return longS
    }
}
