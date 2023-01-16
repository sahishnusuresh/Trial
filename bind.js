// Unlike call function instead of invoking the function immedaitely
//this makes another function

var sahi={
    name:'sahishnu',
    age:21
};
var hobbies=['chess','basketball','keyboard'];
var func1=function(h1,h2,h3){
    console.log(this.name+"hobbies are"+h1+" "+h2+" "+h3);

}
var func2=func1.bind(sahi,hobbies[0],hobbies[1],hobbies[2]);
func2();