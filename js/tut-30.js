//Call back function

//Pretend this to a be a response from a server
const students =[
    {name:"vibhor", subject:"JavaScript"},
    {name:"naman", subject:"C++"},
    {name:"abhay", subject:"C"},
    {name:"vaibhav", subject:"python"}
]

function enrollStudent(student, callback) {
    setTimeout(() => {
       students.push(student); 
       console.log('Student enrolled');
       callback();
    }, 3000);
    //Here first there is a waiting time of 3000 ms i.e 3 seconds and then student object is pushed and any other function is called.
}

function getStudent() {
    setTimeout(() => {
        console.log('Printing list');
        let html="";
        students.forEach(function (element){
            html+=`<li> ${element.name} is fond of ${element.subject}`;
        });
        document.getElementById('students').innerHTML=html;  
    }, 1000);
}

let obj={name:"akshat",subject:"NodeJs"};
enrollStudent(obj,getStudent);
