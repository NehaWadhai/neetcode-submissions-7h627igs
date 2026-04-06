class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
       
       let arr = Array(amount + 1).fill(Infinity)
       //in zero index if 0 amount we will return blank string which is 1
       arr[0] = 0
       for(let currAmount = 1; currAmount < arr.length;currAmount++){
        for(let coin of coins){
            if(currAmount - coin >=0 ){
               
                arr[currAmount] =  Math.min(arr[currAmount] ,1 + arr[currAmount - coin])
                console.log('curr',currAmount,arr[currAmount])
            }
        }
        console.log('arr',arr[amount])
        
       }
       return arr[amount] === Infinity ? -1 : arr[amount] 
    }

}
