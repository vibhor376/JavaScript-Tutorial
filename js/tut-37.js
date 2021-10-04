//Regular Expressions and Related functions
let reg=/joy/;// '/' this is a regular expression literal
reg=/joy/g; //g stands for global flag
reg=/joy/i; //i stands for case insensitive 
console.log(reg);
console.log(reg.source);

//Function to match expressions
let s='joy is a good boy and joy love coding'; 
//1. exec()- This function will return an array for match and null for no match
let result=reg.exec(s);
// result=reg.exec(s);
// console.log(result);
// result=reg.exec(s);
// console.log(result); --> We can use multiple exec with global flag
if(result){
console.log(result);
console.log(result.input);
console.log(result.index);
}
// We can use this as an object also

// 2. test() - Returns true or false
let result2 = reg.test(s); //This will print true only if "reg" is there in string s
// console.log(result2);

//3. match() - It will return an array of results or null
// let result3 = reg.match(s);--> This is wrong!!
let result3 = s.match(reg);//--> This is right
// console.log(result3);

// 4. search()- Returns index of first match else -1
// let result4 = reg.search(s);--> This is wrong!!
let result4 = s.search(reg);//--> This is right
// console.log(result4);

// 5. replace() - Returns new replaced string with all the replacements if no global flag first match will be replaced

let result5 = s.replace(reg,'Vibhor');
console.log(result5);


