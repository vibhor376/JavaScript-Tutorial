// Exercise 2
// You have to create a div and inject it into the page with heading.
// Whenever someone clicks on the div, it should become editable item. Whenever user clicks away (blur). Save the note into the local storage.

let div=document.createElement('div');
console.log(div);
let element =document.querySelector('#heading');
element.appendChild(div);
element.id='edit';
div.innerText="Click to enter the text";
div.addEventListener('click',func1);
function func1(e){
   div.contentEditable="true";
}
div.addEventListener('blur',func2);
function func2(e){
    localStorage.setItem('div',div.innerText);
}
// console.log(div);