
const largestProductOfThree = (array) => {
  // TODO: solution here
  
   let sortArray=array.sort((first,second)=>{
        if(first<second){
            return -1;
        }else{
            return 1;
        }
    });
  
    let product=0;
    if(sortArray.length<3){
        product=sortArray[sortArray.length-1]*
                sortArray[sortArray.length-2];
    }else{
        product=sortArray[sortArray.length-1]*
                sortArray[sortArray.length-2]*
                sortArray[sortArray.length-3];
    }
    
               
   
    return product;
};
