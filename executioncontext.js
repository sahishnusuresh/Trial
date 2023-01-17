// Learning execution context
var name="global";
function a(){
    var name="sahishnu";
    console.log(name); // this should log sahishnu
    return function b(){
        var name="rohan";
        console.log(name);
    };
}
var name1=a();
name1();
