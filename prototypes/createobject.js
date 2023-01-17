//Object.create is function invokded
//Constructor function
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
s1.do();