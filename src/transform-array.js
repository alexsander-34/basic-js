const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
    
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {throw new Error();} 
else if (arr.length == 0) {return arr;}
  let mas=[];
for(let i=0; i<arr.length; i++){
  if(arr[i]==='--discard-next'){
          i++;}
  else if(arr[i]==='--discard-prev'){
          if(mas.length>0){
              mas.pop();
          }
      }
  else if(arr[i]==='--double-next'){
          if((i+1)<arr.length){
              mas.push(arr[i+1]);
          }
      }
  else if(arr[i]==='--double-prev'){
          if(i>0){
              mas.push(arr[i-1]);
          }
      }
   else {mas.push(arr[i]);}
}
return mas;
};
