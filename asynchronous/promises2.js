var func1=function(score){
    return new Promise((res,rej)=>{
        if(score>=50)
        res('congrats')
        else
        rej('lost')
    });
};
var score=100;
func1(score).then((val)=>{console.log(val)}).catch((val)=>{console.log(val)}
);
