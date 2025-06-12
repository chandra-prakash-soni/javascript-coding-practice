// console.log(sum(1)(2)(3)(4).value()); // 10
// console.log(sum(5)(-2)(10).value()); // 13
 
 
 function sum(x){
     let total = x;
     function inner(y){
         total = total+y;
        return inner;    
     }
     inner.value = function(){
         return total;
     }
     
     return inner;
 }
 
 
 console.log(sum(1)(2)(4)(-1).value())