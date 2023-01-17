console.log('hello1')
setTimeout(()=>{console.log('hello2')},1000);
console.log('hello3')
//
// asynchronous function settimeout will be put to 
// taskqueue after its completion by the event loop
