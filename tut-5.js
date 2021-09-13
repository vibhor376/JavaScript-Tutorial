const name='Vibhor';
const greeting='Good Morning';
console.log(greeting+' '+name);
let html;
html='<h1> this is heading</h1> '+
   "<p> this is para </p>";
// html=html.concat('this','str2');
// console.log(html);
// o/p: <h1> this is heading</h1> <p> this is para </p>thisstr2
// console.log(html.toUpperCase());
// o/p: <H1> THIS IS HEADING</H1> <P> THIS IS PARA </P>THISSTR2
// console.log(html.toLowerCase());   
// o/p: <h1> this is heading</h1> <p> this is para </p>thisstr2 


// console.log(html.lastIndexOf('>')); 
// 46 last index
// console.log(html.indexOf('>'));
//  3 first index
// console.log(html[0]);  
// o/p: <
// console.log(html.charAt(0)); 
// o/p: <
// console.log(html.endsWith("</p>"));
// o/p: true 
// console.log(html.includes("this"));
// o/p: true 
// console.log(html.substring(1,3));
// o/p: h1
// console.log(html.slice(0,4));
// o/p:<h1>
// console.log(html.split(' '));
// o/p: ['<h1>', 'this', 'is', 'heading</h1>', '<p>', 'this', 'is', 'para', '</p>']
// console.log(html.replace("this","it"));
// o/p:<h1> it is heading</h1> <p> this is para </p>(changes first occurence of 'this')
// let fruit1="Orange";
// let fruit2="Appple";
// let myHtml=`Hello ${name}
//             <h1> This is heading </h1>
//             <p> You like ${fruit1} and ${fruit2}.</p>`;
// document.body.innerHTML=myHtml;

