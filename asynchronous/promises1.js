//chaining
var num=1;
var prm=new Promise((res,rej)=>{
    if(num==2)
    res('hey');
    
    else
    rej('sahishnu');
    
});
prm.then((val)=>console.log(val)).catch
((val)=>console.log(val));

//If catch is put separate rather than chain 
// javascript throws unhandledpromsie error