var longestRun = function(string) {
  // TODO: Your code here!
   if(string===""){
      return null;
   }
   let sortStr=string.split("")// 
   let prevIndexNCount=[0,0,0]; //[starIndex,EndIndex,Counter]
   let currentIndex=[0,0,0];//[starIndex,EndIndex,Counter]
   let strChar=''; //charactor in the string

   sortStr.forEach((char,idx)=>{ 
       if(strChar!==char){
           strChar=char;
           ++currentIndex[2];
           if(currentIndex[2]>prevIndexNCount[2]){
               prevIndexNCount[0]=currentIndex[0];
               prevIndexNCount[1]=currentIndex[1];
               prevIndexNCount[2]=currentIndex[2];
            
           }
           currentIndex[0]=idx;
           currentIndex[2]=0;
       }else{
           currentIndex[2]+=1;
           currentIndex[1]=idx;
       }
        
   });
   return [prevIndexNCount[0],prevIndexNCount[1]];
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function(len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
