//Selectors
// 1. Single element selector 
// 2. Multi element selector 


// 1. Single element selector 
let element=document.getElementById('first');
// element=element.className;
// element=element.childNodes;
// element=element.parentNode;
element.style.backgroundColor="green";
element.innerText="I am a good boi";
element.innerHTML="<b> I am a boi</b>"
// console.log(element.innerText);

let sel=document.querySelector('#second');
sel=document.querySelector('.child');
sel=document.querySelector('div');
sel=document.querySelector('h1');
sel.style.color = 'green';
// console.log(sel);

// 2. Multi element selector 
let elems=document.getElementsByClassName('child');
elems=document.getElementsByClassName('container');
// console.log(elems[0].getElementsByClassName('child'));
elems=document.getElementsByTagName('div');
Array.from(elems).forEach(function(element){
    console.log(element);
    element.style.color='blue';
})
