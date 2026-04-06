class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    

    robberHelper(arr){
        if(arr.length < 2) return arr[0]
        let loot = Array.from({length: arr.length}).fill(0)
        loot[0] = arr[0]
        loot[1] = Math.max(arr[0],arr[1])
       
        for(let i =2; i < arr.length;i++){
            loot[i] = Math.max((arr[i] + loot[i-2]), loot[i-1])
        }
        return loot[arr.length -1]
    }
    rob(nums) {
      if(nums.length < 2) return nums[0]
      let skipFirstHouse  = []
      let skipLastHouse = []
      for(let i=0 ;i < nums.length - 1; i++){
        skipFirstHouse[i] = nums[i+1]
        skipLastHouse[i] = nums[i]
      }

      let firstHouseloot = this.robberHelper(skipFirstHouse)
      let secHouseloot = this.robberHelper(skipLastHouse)
        console.log('skipFirstHouse',skipFirstHouse,skipLastHouse)
        console.log('firstHouseloot',firstHouseloot,secHouseloot)

      return Math.max(firstHouseloot,secHouseloot)
    }
}
