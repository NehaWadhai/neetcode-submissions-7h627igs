class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const map ={}
     for(const s of strs){
            let arr = new Array(26).fill(0)
            for(let c of s ){
                arr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
            }
            const key = arr.join('#')
            console.log(key)
            if(!map[key]){
                map[key] = []
            }
            map[key].push(s)
        }
        return Object.values(map)
        
    }
}
