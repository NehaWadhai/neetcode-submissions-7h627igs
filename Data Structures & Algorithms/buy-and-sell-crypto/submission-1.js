class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let buy = 0
        let sell = buy +1 
        let profit = 0
        while(sell < prices.length){
            if(prices[buy] > prices[sell]){
                buy +=1
                sell = buy +1
            }else{
                profit = Math.max((prices[sell] - prices[buy]),profit)
                sell++

            }
        
        }
        return profit
    }
}
