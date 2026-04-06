class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let buy = 0
       let sell = buy + 1 
       let maxProfit = 0
       while(sell < prices.length){
       
        if(prices[buy] > prices[sell]){
            buy = sell
            sell++

        }else{
             let profit =  prices[sell] -  prices[buy]
        maxProfit = Math.max(profit,maxProfit)
        sell++
        }
           
            console.log('buy',prices[buy])
       console.log('sell',prices[sell])
       }
       
      return maxProfit
    }
}
