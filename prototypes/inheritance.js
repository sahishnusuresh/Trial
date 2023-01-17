function student(name,age,city,sport){
    this.name=name;
    this.age=age;
    this.city=city;
    this.sport=sport;
    // return st;
}
const s1=new student('sahishnu',21,'bangalore','basketball');
student.prototype.do=function(){
    console.log(this.sport);
}
//create students life object with
//student as parent class using call method
//Invoke parent class in context of child
function slife(name,age,city,sport,course){
    student.call(this,name,age,city,sport);
    this.course=course;
}
slife.prototype=Object.create(student.prototype);
const sahi=new slife('sahishnu',21,'bangalore','basketball','cse');

sahi.do();