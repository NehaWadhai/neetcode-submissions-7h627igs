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
            console.log('buy,sell',buy,sell)
            buy = sell
            sell++ 
        }else{
            maxProfit = Math.max(maxProfit, prices[sell] - prices[buy])
            sell++
        }
       }
       return maxProfit
    }
}
