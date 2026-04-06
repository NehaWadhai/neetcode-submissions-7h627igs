class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target){
    let rows = matrix.length
    let col = matrix[0].length
    let top = 0 
    let bot = rows - 1
     let row = -1
    while(top <= bot){
        let r = Math.ceil((top + bot)/2)        
     
        if (target < matrix[r][0]) {
    bot = r - 1
} else if (target > matrix[r][matrix[r].length - 1]) {
    top = r + 1
} else {
    // target is in this row
    row = r
    break
}
      
    }
   
    if(row === -1){
        return false
    }
    // const k = Math.floor((top + bot) /2)
    let arr = matrix[row]
    let l = 0
    let r = matrix[row].length -1 
   
    while(l <= r){
        const mid = Math.floor((l + r )/2)
        if(arr[mid] > target){
            r = mid - 1
        }
        if(arr[mid] < target){
            l = mid + 1
        }
        if(arr[mid] === target){
            return true
        }
    }
   return false 
}
}
