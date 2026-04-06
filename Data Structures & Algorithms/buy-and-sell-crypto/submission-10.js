class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0
        let sell = buy + 1
        let profit = 0
        //prices=[5,1,5,6,7,1,10]
        while(sell < prices.length ){
            if(prices[buy] > prices[sell]){
            console.log('prices[buy]', prices[buy],prices[sell])
                buy = sell
                sell = buy +1
            }else{
            console.log('prices[buy]2', prices[buy],prices[sell])
               profit = Math.max((prices[sell] - prices[buy]),profit)

               sell++ 
            }

        }
       return profit 
    }
}
