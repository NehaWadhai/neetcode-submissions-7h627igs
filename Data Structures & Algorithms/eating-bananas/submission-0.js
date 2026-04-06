class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles)
        let res = r
        console.log(r)
        
        while(l <= r){
            const p = Math.floor((l+r)/2)
            
            let totalTime = 0
            for (const k of piles) {
                console.log('k:', k, Math.ceil(k/p))
                totalTime += Math.ceil(k/p)
            }
            if(totalTime <= h){
                res = p
                r = p -1
            }else{
                l = p + 1
            }
            
            


        }
        return res


    }
}
