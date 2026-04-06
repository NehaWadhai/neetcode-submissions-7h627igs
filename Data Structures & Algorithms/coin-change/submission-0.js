class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let arr = Array(amount+1).fill(Infinity)
        arr[0] = 0

        for(let currAmount = 1; currAmount <= amount; currAmount++){
            for(let coin of coins){
                if(currAmount - coin >= 0){
                    arr[currAmount] = Math.min(arr[currAmount], 1 + arr[currAmount - coin])
                }
            }
        }
        return arr[amount] === Infinity ? -1 : arr[amount];
    }
}
