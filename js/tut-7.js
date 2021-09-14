//If and Conditionals, Switches

let age=67;
// if(age==19){
//     console.log("Age is ", age);
// }else if(age!==45){
//     console.log("Age is not 45");
// }else{
//     console.log('Age is not ', age);
// }
const doesDrive=true;
// if(doesDrive&&age>=18){
//     console.log("You can drive");
// }else{
//     console.log("You cannot drive");
// }
// console.log(age==45? 'Age is 45':'Age is not 45');
age =19;
switch (age) {
    case 18:
        console.log("You are 18");
        break;
    case 28:
        console.log("You are 28");
        break;
    case 45:
        console.log("You are 45");
        break;    
    default:
        console.log("You are unkonwn age");
        break;
}