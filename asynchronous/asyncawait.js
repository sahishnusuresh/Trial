//Async tells JS the function will return a promise.
//Instead of using chianing thens, await will execute the function when the 
//promise is resolved.
// async function tellscore(score){
//     return score/100;
// } 
// tellscore(10).then((val)=>{console.log(val)});

async function tellingscore(score){
var func=new Promise((res,rej)=>{
    setTimeout(res(score/100),2000);
    rej('rejected')
});
var result=await func;
console.log(result);
}
tellingscore(10);