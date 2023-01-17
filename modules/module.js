//use module.exports to be able to export some 
//specific thing

var cities=['bangalore','chennai','x']

function setcity(){
    cities[1]='delhi';
}
function getcity(){
    return cities[0];
}
module.exports={
    cities:cities,
    getcity:getcity,
    setcity:setcity
};