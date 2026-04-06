class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    generateFrequency(str){
        let arr = Array(26).fill(0)
        
        for(let c of str){
            arr[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
        }
        const key = arr.join(',')
        return key
    }
    groupAnagrams(strs) {
        let res = {}
        for(let c of strs){
           const key = this.generateFrequency(c)
           if(!res[key]){
              res[key] = []  
           }
           res[key].push(c)
        }
    console.log('res',Object.values(res))
       return Object.values(res)
          
    }
}
