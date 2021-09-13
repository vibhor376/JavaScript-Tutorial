//Arrays and Objects

let marks=[34,23,24,9,34,25];
const fruits=["orange","appple","grapes"];
const mixed=[1,2,3,"orange",false,[1,2]];
// console.log(marks);
// o/p:[34, 23, 24, 9, 34, 25]
// console.log(fruits);
// o/p:['orange', 'appple', 'grapes']
// console.log(mixed);
// o/p:[1, 2, 3, 'orange', false, Array(2)]
// console.log(Array.isArray(mixed));
// o/p: true
marks[0]='vibhor';
// let arrElement=marks[0];
// console.log(marks);
// o/p: ['vibhor', 23, 24, 9, 34, 25]
let value=marks.indexOf(9);
// console.log(value);
// o/p:3
// Modifying or Mutating arrays
// marks.push(24);
// marks.unshift(1009);
// marks.pop();
// marks.shift();
// marks.splice(2,4);
// console.log(marks);
// deletes all elements from [2,4]
// marks.reverse();
let marks2=[1,2,3,4];
// marks=marks.concat(marks2);
// console.log(marks);
// concatenates both the arrays
//Objects

let myObj={
    'first name': 'vibhor',
    'last name': 'bhatnagar',
    branch: 'elctronics and computer',
    marks: [45,46,41,35,36]
}
console.log(myObj);
console.log(myObj['last name']);
console.log(myObj.marks);