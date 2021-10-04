//Prototype Inheritance in JavaScript

const proto={
    slogan: function () {
        return 'Eat Code Sleep Repeat';
    },
    changeName: function (newName) {
        this.name= newName;
    }
}
//This creates vibhor object
const vibhor=Object.create(proto);
vibhor.role="Programmer";
vibhor.name='Joy';
vibhor.changeName('Joy');
console.log(vibhor);


// This also creates a vibhor object
const vibhor1=Object.create(proto,{
    name:{value:"vibhor",writable:true},
    role:{value:"programmer"},
});
vibhor1.changeName('Vibhor');
// console.log(vibhor1);

//Employee constructor
function Employee(name, salary, experience) {
    this.name= name;
    this.salary=salary;
    this.experience=experience;
}

//Slogan
Employee.prototype.slogan = function () {
    return `this company is the best. Regards, ${this.name}`
}
// create and object from a constructor   
let Joy= new Employee("Joy",1000000000,0);
// console.log(Joy.slogan());

function Programmer(name,salary, experience, language) {
    Employee.call(this, name ,salary, experience);
};

// Inherit the prototype 
Programmer.prototype =Object.create(Employee.prototype);

//Manually set the constructor
Programmer.prototype.consturctor = Programmer;

let akshat = new Programmer("Akshat", 1999999,0, "JavaScript");
console.log(akshat);