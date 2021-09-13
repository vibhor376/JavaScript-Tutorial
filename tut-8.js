//Loops 

// console.log(1);
// console.log(2);
// console.log(3);

// for(let i=0;i<100;i++){
//     console.log(i);
// }
let i=100;
// while(i<100){
// console.log(i);
// i++;
// }
// do{
// console.log(i);
// i++;
// }while(i<100)
let arr=[1,2,3,4,5];
// arr.forEach(function(element){
// console.log(element);
// })
let obj={
    name: "Vibhor Bhatnagar",
    age: 19,
    type: "Ass whooping programmer",
    os:"Windows"
}
for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}