// Primitive Data Types:

// Strings
 let name="Vibhor"
 console.log("My string is " + name);
 console.log("Data types is " +(typeof name));

 // Number
 let marks=34;
 console.log("Data types is " +(typeof marks));

 // Boolean
 let isDriver=true;
 console.log("Data type is " + (typeof(isDriver)));

 // NULL
 let nullVar=null;//Exception 
 console.log("Data type is "+ ((typeof nullVar)));

 // Undefined
 let unDef;
 console.log("Data type is "+ (typeof unDef));

//  Reference Data Types

// Arrays
let myArr=[1,2,3,4,false];
console.log("Data types is "+ (typeof myArr));

// Objects
let stMarks={
    name: "Vibhor",
    marks: 90,
    branch: "ECS"
}
console.log("Data type is "+ (typeof stMarks));

// Function
function findName(){
    let find_Name = "Vibhor";
    return find_Name;
}
console.log(findName());
console.log("Data type is" + (typeof findName));

//  Date
let date=new Date();
console.log("Data type is "+ (typeof date));
