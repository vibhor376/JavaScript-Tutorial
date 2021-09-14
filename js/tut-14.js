//Child , Parent and traversing the DOM

let child=document.querySelector('.dummy');
child=document.querySelector('.container');
// console.log(child);
// console.log(child.childNodes);
// console.log(child.children[1].nodeType);
// Node Types 
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. Document
// 10. DocType
console.log(child.children[4].nodeName);
let container=document.querySelector('.container');
// console.log(container.children[0].children[0].children);
// console.log(container.firstElementChild);
// console.log(container.firstChild);
//Count of child elements
// console.log(container.childElementCount);
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);