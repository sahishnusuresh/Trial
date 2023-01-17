var num=2;
var new1=new Promise((res,rej)=>{
    
    res(function hey(){
        return 'hey';
    }),
    
    rej('not sahishnu')
    

});
new1.then((val)=>{console.log(val)});
// new1.catch((val)=>{console.log(val)});
