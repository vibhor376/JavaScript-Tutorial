//Object Prototype

// Object literal : Object.prototype
let obj={
    name: "vibhor",
    age: "19",
    address: "House No-376,Sector 11-D"
}

function Obj(givenName) {
    this.name = givenName;
}
let obj2=new Obj('Vibhor');
console.log(obj2);
Obj.prototype.getName = function() {
    return this.name;
}
console.log(obj2.getName());//Vibhor
Obj.prototype.setName=function (newName) {
    this.name=newName;
}
obj2.setName('Akshat');
console.log(obj2.getName());//Akshat