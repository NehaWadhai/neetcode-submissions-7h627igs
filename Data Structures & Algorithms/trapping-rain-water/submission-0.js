class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(h) {
         let l = 0
    let ans = 0
    let r = h.length - 1
    let lmax = 0
    let rmax = 0
    while(l < r){
        lmax = Math.max(lmax,h[l])
        rmax = Math.max(rmax, h[r])
         console.log(lmax,rmax)
        if(lmax < rmax){
            ans += lmax - h[l]
            l++
        }else{
            ans += rmax - h[r]
            r--
        }
    }
   
    return ans
    }
}
