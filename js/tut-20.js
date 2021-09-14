//Math Object in JavaScript
let x = 3;
let y = 6;
let z;
z = Math;
z = Math.E//2.718281828459045
console.log(z);
z = Math.PI//3.141592653589793
z = Math.ceil(5.6);//6
z = Math.floor(5.6);//5
z = Math.round(5.5);//6
z = Math.abs(-5);//5
z=Math.sqrt(4.4);//2.0976176963403033
z=Math.pow(2,3);//8
z=Math.min(2,3,4,5);//2
z=Math.max(2,3,4,5);//5
z=Math.random();//Generates a random value between (0,1)
/*
If you want to generate a random no between range (min,max)
then multiply math.random() with (max-min) for max value and add
min value to the result */
// For example you want to generate a random number between (13,20)
let a_20=13+z*(20-13);//Min+Math.random()*(Max-Min)
console.log(a_20);
