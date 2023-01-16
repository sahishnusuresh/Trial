//Javascript creates an ibject by using 'new' keyword with a function
//and assigning it to an object
var func=function(name,age,city){
    this.name=name;
    this.age=age;
    this.city=city;
}
var sahi= new func('sahi',21,'bangalore');
console.log(sahi.city);