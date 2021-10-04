//More on JavaScript events

let btn=document.querySelector('input#btn');
console.log(btn);
btn.addEventListener('click',func1);
btn.addEventListener('dblclick',func2);
btn.addEventListener('mousedown',func3);
function func1(e){
    console.log('Thanks for clicking the button',e);
    e.preventDefault();
}
function func2(e){
    console.log('Thanks for clicking the button twice',e);
    e.preventDefault();
}
function func3(e){
    console.log('Thanks it is a mousedown ',e);
    e.preventDefault();
}

document.querySelector('.dummy').addEventListener('mouseenter',func4);

function func4(e){
   console.log('You entered dummy');
}
document.querySelector('.dummy').addEventListener('mouseleave',func5);

function func5(e){
    console.log('You exited dummy');
}

document.querySelector('.container').addEventListener('mousemove',func6);

function func6(e){
    console.log(e.offsetX,e.offsetY);
    console.log('You triggered mosue event');
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},101)`;
}

let dumb=document.querySelector('.dumb');
dumb.children[1].addEventListener('click',func7);
function func7(e){
    console.log('You clicked second child of dumb');
}