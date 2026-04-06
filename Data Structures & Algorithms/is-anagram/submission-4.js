class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        let smap = {}
        let tmap ={}

        for(let i =0 ; i< s.length;i++ ){
            if(!smap[s[i]]){
               smap[s[i]] = 1 
            }else{
                smap[s[i]] += 1 
            }
        }
         for(let i =0 ; i< t.length;i++ ){
            if(!tmap[t[i]]){
               tmap[t[i]] = 1 
            }else{
                tmap[t[i]] += 1 
            }
        }
        for(let key in smap){
            console.log('key', tmap[key])
            if(smap[key] !== tmap[key]){
                return false
            }
            console.log('key', key)
        }
        return true
    }
}
