class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n === 1) return 1
        let arr = []
        arr[1] = 1
        arr[2] = 2

        for(let i =3 ; i <= n ; i++){
            arr[i] = arr[i-1] + arr[i-2]
        }
        return arr[n]
    }
}
