class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    generateFreq(str){
        const arr = new Array(26).fill(0)
    for(let k of str){
            arr[k.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
    }
    let key = arr.join(',')
    return key
    }
    
    groupAnagrams(strs) {
    let map = {}
    for(let word of strs){
        const key = this.generateFreq(word)
        if(!map[key]){
            map[key] = []
        }
            map[key].push(word)
        
    }

    return Object.values(map)
       console.log('map',map)   
    }
}
