//Events and Event Objects

let doc=document.getElementById('heading').addEventListener
('click',function(e){
    console.log('You have clicked the heading');
    // location.href="https://vibhor376.github.io/Portfolio/";
    let variable=e.target;
    variable=e.target.className;
    variable=e.target.classList;
    variable=e.target.id;
    variable=e.offsetX;
    variable=e.offsetY;
    variable=e.clientX;
    variable=e.clientY;
    console.log(variable);
});