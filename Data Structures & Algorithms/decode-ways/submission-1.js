class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {

    let l = s.length
    let arr = []
    arr[0] =1
    arr[1] = s.charAt(0) === '0' ? 0 : 1
console.log('arr',arr,l)
    for(let i = 2; i<= s.length; i++){
        let onedigit = parseInt(s.substring(i-1,i))
        let twodigit = parseInt(s.substring(i-2,i))
        console.log('twodigit',twodigit,onedigit)
        if(onedigit >=1){
            arr[i] =  arr[i] ?  arr[i] + arr[i-1] : arr[i-1]
            console.log('arr[i-1]',arr)
        }
        
         if(twodigit <= 26 && twodigit >= 10){
            arr[i] = arr[i] ?  arr[i] + arr[i-2] : arr[i-2]
        }
         console.log('arr4',arr)

    }
    console.log(arr[l])
    return arr[l] ? arr[l] : 0
    
    }
}
