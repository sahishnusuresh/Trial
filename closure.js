function outer(val){
    var f1 =1;
    function inner(inner){
        return val+inner;
    }
    return inner;
}
var f2=outer(5);
console.log(f2(1));