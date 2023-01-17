
var binding=function (obj){
    this.state="karnataka";
}
var sahi={
    name:'sahi',
    city:'bangalore',
    state:"up"
};
var f2=binding.bind(sahi);
f2();
console.log(sahi.state);