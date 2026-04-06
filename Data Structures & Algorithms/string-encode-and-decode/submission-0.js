class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodeString = ''
    for(let i = 0; i < strs.length ; i++){
       encodeString +=  strs[i].length + '#' + strs[i]
    }
    console.log('encodeString', encodeString)
    return encodeString
    
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const arr = []
    let i = 0
    while(i < str.length){
        const pos = str.indexOf('#', i)
        const len = parseInt(str.slice(i,pos))
        i = pos +1
        const s = str.slice(i,i+len)
        arr.push(s)
        i += len
    }
    return arr
     }
    
}
