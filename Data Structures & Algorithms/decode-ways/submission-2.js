class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
    let arr = Array(s.length+1).fill(0)
    if(s.charAt(0) === '0'){
        return 0
    }
    arr[0] = 1 
    arr[1] = s.charAt(1) === '0' ? 0 : 1     
    for(let i =2; i <= s.length ; i++){
        let oneDigit = s.substring(i-1,i)
        let twoDigit = s.substring(i-2,i)
        console.log('twoDigit',oneDigit,twoDigit)
        if(oneDigit > 0 && arr[i-1] !== '0'){
            arr[i] +=  arr[i-1]
        }
         if(twoDigit >= 10 && twoDigit <= 26){
            arr[i] +=  arr[i-2]
        }

        
       

    }
     console.log('one', arr)
        return arr[s.length]
  
    
    }
}
