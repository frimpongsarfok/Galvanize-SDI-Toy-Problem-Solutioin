var evenOccurrence = function(arr) {
 
   let evenValue=null
   arr.forEach(ele1=>{
        let count=0;
        arr.forEach(ele2=>{
          if(ele2===ele1){
                ++count;  
           }  
        });
        if(count%2===0 ){
           evenValue=ele1;
           return;
        }
    });
    return evenValue;
    
  };

