//Date and Time in JavaScript

//Displays the current date and time
let today = new Date();//Tue Sep 14 2021 20:24:56 GMT+0530 (India Standard Time) 
// console.log(today);

let otherDate = new Date('8-4-2003 04:54:08');//Mon Aug 04 2003 04:54:08 GMT+0530 (India Standard Time)
otherDate = new Date('12/01/2001');//(MM-DD-YYYY) Sat Dec 01 2001 00:00:00 GMT+0530 (India Standard Time) 
otherDate = new Date('Dec 1 2001 12:30:07');//Sun Jun 13 1999 00:00:00 GMT+0530 (India Standard Time)

console.log(otherDate);

let a = otherDate.getDay();//6 (saturday)
a = otherDate.getMinutes();//30
a = otherDate.getDate();//1
a = otherDate.getHours();//12
a = otherDate.getSeconds();//7
a = otherDate.getMonth();//11 (0-based counting)
otherDate.setDate(23);//Sets Date 23
otherDate.setMonth(2);//Sets Month March 
otherDate.setFullYear(2000);//Sets Year 2000
otherDate.setHours(2);//Sets hour
otherDate.setMinutes(45);//Sets minutes
otherDate.setSeconds(59);//Sets seconds
a = otherDate;
console.log(a);
