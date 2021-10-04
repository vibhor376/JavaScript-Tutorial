//Eror handling and try catch in JavaScript

//pretend this is coming from a server as a response
let name='vibhor';
name=undefined;
if(name!=undefined){
    throw new Eror('This is not undefined');
}else{
    console.log('This is undefined')
}

try {
    // asalslakslak//random text
    console.log("We are inside a try block");//this syntax is ok
    //but if we do some syntax error then there is catch function which will convert it from error to a text in short error will not remain as an error
    vibhor()
} catch (error) {
    // console.log(error);
    console.log('What is ur name?');
    // console.log(error.name)// o/p:refrence error
    // console.log(error.message)// o/p:vibhor is not declared 
    // this error message will be converted into a plain text
} finally{
    console.log('We will run this');//irresptive of whether error occurs or not this will block will be executed 
}
// Types of errors:
// TypeError = occurs when a variable or parameter is not of a valid type.
// SyntaxError = occurs when there is an error in syntax.
// ReferenceError = occurs when there is an invalid reference.
// EvalError= occurs when there is an error in global function.
// RangeError=  occurs when a numeric variable or parameter is outside of its valid range.