var characterFrequency = function (string) {
   let newSortedStr="";
   let sortFreq=[];
   let strArray=string.split("");
   newSortedStr=strArray.sort();
   let counter=0;
   let char="";
    for (var i=0; i<newSortedStr.length;++i) {
        if(newSortedStr[i]===newSortedStr[++i]){
            counter+=1;
            --i;
        }else{
             counter+=1;
            sortFreq.push([newSortedStr[--i],counter]);
            counter=0;
            
        }  
        
    }
  
    
    sortFreq.sort((first,second)=>{
       if(first[1]>second[1] ){
           return -1
          
       }else if(first[1]===second[1] && first[0]<second[0]){
           return -1;
       }else {
          return 1;
       }
         
    });
     
   return sortFreq;
};
