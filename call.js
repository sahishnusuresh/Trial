//using call function by explicitly defining 
//a function and binding it

var func1=function(obj){
    console.log("I am "+this.age+"years old");
 
 }
 var obj2={
    age:21
 };
 func1.call(obj2);

 // call function immediately invokes 
 //the function
 var obj3={
    age:22
 };
 var arr=[obj2,obj3]
 func1.apply(arr);

 