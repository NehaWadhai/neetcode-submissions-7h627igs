class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let stack = []
        let pair = position.map((p,i) =>{
           return [p,speed[i]]
        })
        pair.sort((a,b) => b[0] - a[0])
        // let initialTime = (target - pair[0][0]) / pair[0][1]
        for(let i = 0  ; i < position.length ; i++){
           let currTime = (target - pair[i][0]) / pair[i][1]
            if(stack.length === 0 || stack[stack.length - 1] < currTime){
                stack.push(currTime)
            }

        }
        console.log('stack',stack)
        return stack.length
    }
}
