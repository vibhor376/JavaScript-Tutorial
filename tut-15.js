//Creating, Removing and Replacing elements

let element=document.createElement('li');
element.className='children';
element.id='createdLi'
element.setAttribute('title', 'mytitle');
element.innerText='This is created by me';
element.innerHTML='<b> This is created by me </b>';
// console.log(element);
let ul=document.querySelector('ul.this');
// ul.appendChild(element);
// console.log(ul);

let element2=document.createElement('p');
element2.className='children';
element2.id='children';
let textNode=document.createTextNode('This is my para created with text node');
element2.appendChild(textNode);
let rep=document.querySelector('ul.this');
let attri=element2.getAttribute('class');
// element2.removeAttribute('id');
// console.log(attri);
// rep.removeChild(rep.children[0]);
// rep.children[3].replaceWith(element2);
// console.log(element2);
let heading=document.createElement('h3');
heading.className='heading';
// heading.id='heading';
heading.innerHTML="<a href=https://vibhor376.github.io/Portfolio/> Go to portfolio";
let get=document.querySelector('h1#heading');
get.appendChild(heading);

