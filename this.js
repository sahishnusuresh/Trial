//Understanding this keyword
 var obj={
    name:'sahi',
    age:56
 };
 console.log(obj.name)
var obj1={
   name:'sahishnu',
   printname:function(){
      console.log(this.name);
   }
};
obj1.printname();


