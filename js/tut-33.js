//Arrow functions

//Creating a normal function
// const vibhor =function() {
//     console.log('Hi my name is vibhor');
// }

// Converting it into arrow function 
// const vibhor = ()=> {
//     console.log('Hi my name is vibhor');
// }
// vibhor();

//Function return something
// const greet= function () {
//  return "good morning";   
// }

//One liner do not require braces/return
//one line will automatically return
// const greet = () => "good morning"

// const greet = () => ({name:"vibhor"});

// const greet = (name) => "good morning " + name;

//Single parameters do not require parenthesis
//But you will have to put parenthesis if there are multiple parameters
const greet = name => "good morning" + name + ending;
console.log(greet("vibhor"));