//Since .then and .catch return a new promise and 
//wrap the value that is returned in a newer promise 

function f1(){
    console.log("hey");
}
function f2(){
    console.log("sahishnu");
}
function f3(){
    console.log("here");
}
var func1=new Promise((res,rej)=>
{
    res(),

    rej("hi");
});
func1.then(f1()).then(f2()).then(f3());