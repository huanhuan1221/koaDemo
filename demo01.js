/* function getSomething(){
    return 'something';
}
async function testAsync() {
    return 'Hello async';
}
async function test(){
    const v1=await getSomething();
    const v2=await testAsync();
    console.log(v1,v2);
}
test(); */
/* const result=testAsync();
console.log(result); */
function takeLongTime(){
    return new Promise(resolve=>{
        setTimeout(() =>resolve('long_time_value'), 5000);
    });
}
async function test(){
    const v=await takeLongTime();
    console.log(v);
}
test();