// Data Type Conversion and Coercion

let num=12;
console.log(typeof num);
//Conversion of num to string 
num=String(num);
console.log(typeof num);

num=Boolean(num);
console.log(typeof num);

let stri="1234";
console.log(typeof stri);

stri=Number("1234");
console.log(typeof stri);

stri=Boolean("1234");
console.log(typeof stri);

let myArr=[1,2,3,4];
console.log(typeof myArr);

myArr=Number([1,2,3,4]);
console.log(myArr,typeof myArr);
//Array cannot be converted into a number therfore value of array will change to NAN i.e Not a Number

// ParseInt will convert Number to INT
 let N=12.2343;
//  console.log(N); 12.343
 N=parseFloat(N);
//  console.log(N); 12.343
 N=parseInt(N);
//  console.log(N); 12
 
 N=12.333434;
 console.log(N ,N.toFixed(2));
//  12.333434 12.33 
// tofixed works same as setprecision of C++
  
// Type Coercion
 let myNum=12;
 let addNum="34";
// console.log(myNum+addNum); 1234     
// concatenate both   
 addNum=Number(addNum);
//  console.log(myNum+addNum); 46
//  adds both the numbers 

 