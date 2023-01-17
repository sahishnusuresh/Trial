function array(){
    let arr=Object.create(array.prototype)
    arr.length=0;
    for(key in arguments){
        arr[key]=arguments[key];
        arr.length+=1;
    }
}
const age=[21,22,23];
array.prototype.push=function(val){
    this[this.length]=val;
    this.length++;
    return this.length;
}
var a=age.push(3);
console.log(a);
console.log(age);
array.prototype.pop=function(){
    this.length--;
    var ele=this[this.length];
    return ele;
}
var b=age.pop();
console.log(b);
console.log(age);