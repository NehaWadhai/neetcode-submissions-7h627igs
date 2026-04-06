class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

         
    let profit = 0
     let min = prices[0]
    for(let i =1 ; i < prices.length ; i++){
        min = Math.min(min, prices[i])
        let curr = prices[i] - min 
       profit = Math.max(profit, curr)
       console.log(profit)
    
    
    }
    return profit
    
}

}