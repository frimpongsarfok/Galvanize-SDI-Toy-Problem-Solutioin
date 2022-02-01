
let longestPalindrome=(string)=>{
    let palindrome=(str,i)=>{
        if(i===undefined){
            i=str.length;
        }
        if(i<=0){
            return true;
        }else{
            if(str[str.length-i]!==str[i-1]){
                return false;
            }
          return palindrome(str,--i);
        }
    }
    let strArr=string.split('');
    let rangeDif=0;
    let bigPalindrome='';
    strArr.forEach((element,index )=> {
        strArr.forEach((element2,index2)=>{
             let tmpDif=index2-index;  
            if(element===element2 && tmpDif>=2){
                let palTmp=string.substring(index,index2+1);
                if(palindrome(palTmp) && tmpDif>rangeDif){
                     rangeDif=tmpDif;
                     bigPalindrome=palTmp;
                }
            }
        })
    });
    return bigPalindrome;
}
