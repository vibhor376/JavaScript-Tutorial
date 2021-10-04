//Synchronous Programming
/*
1. Things happen one at a time.
2. When you call a function that performs a long action, it returns only when the action has finsihed so that it can return the result.
3. This stops your program for the time the action takes.
*/
//Asynchronous Programming 
/*
This allows multiple things to happen at same time thus saving time.
*/

for (let index = 0; index <400; index++) {
    let element = index;
    console.log('This is an example of synchronous instruction');
}
console.log('Done printing synchronous instruction');
// Here we first excute every instruction inside the loop and the we excute the statement of 'Done Printing'.
//This is example of synchronous programming
setTimeout(() => {
    for (let index = 0; index <400; index++) {
        let element = index;
        console.log('This is an example of asynchronous instruction.');
    }  
}, 100);
console.log('Done printing asynchronous instruction');
//Here we give time limit of 100 ms and after 100ms it start excuting instruction inside the for loop