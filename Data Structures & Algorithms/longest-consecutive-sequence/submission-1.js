class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let hashMap = new Map ()
        let longestLength = 0
        for(let i =0 ; i < nums.length; i++){
            hashMap.set(nums[i], false)
        }
        for(let i =0 ; i < nums.length;i++){
           
            let currentLength = 1
            let nextNum = nums[i] + 1
             console.log('nextNum',nextNum)
            while(hashMap.has(nextNum) && !hashMap.get(nextNum)){
               currentLength++
               hashMap.set(nextNum, true)
               console.log('hashMap', hashMap)
               nextNum++
            }

            let prevNum = nums[i] - 1
             while(hashMap.has(prevNum) && !hashMap.get(prevNum)){
               currentLength++
                hashMap.set(prevNum, true)
               prevNum--
            }

             longestLength = Math.max(longestLength,currentLength)
           
        }
          return longestLength
    }
}
