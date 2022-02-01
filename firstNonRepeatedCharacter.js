var firstNonRepeatedCharacter = function (string) {
    let strArray=string.split(",").toString().split("").sort();
    let sortedStr=strArray;
    for (var i=0; i<sortedStr.length;++i) {
        if(sortedStr[i]===sortedStr[++i]){
             --i;
        }else{
           if(i==sortedStr.length){
                return null;
            }else{
                while(sortedStr[i]===sortedStr[++i]){
                   ++i;
                 }
                 --i;
                return sortedStr[i];
            }
        }  
    }
  
    return null;
};
