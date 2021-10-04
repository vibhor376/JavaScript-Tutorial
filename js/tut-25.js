// Classes and Inheritance 

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan() {
        return `I am ${this.name} and I am a proud employee of this company.`;
    }
    joiningYear() {
        return 2021 - this.experience;
    }
    static add(a, b) {
        return a + b;//Static is a method of class which does not use objects of class
    }
}

let vibhor = new Employee("Vibhor", 1, "Technical");
// console.log(vibhor.slogan());
// console.log(vibhor.joiningYear());
// console.log(Employee.add(4,5));

//Inheritance in Class
class Programmer extends Employee {
    constructor(givenName, givenDivision, givenExperience, language, github) {
        super(givenName, givenExperience, givenDivision);//constructor of class from which this class is inherited
        this.language = language;
        this.github = github;
    }
    favoriteLanguage() {
        if (this.language == 'Python') {
            return 'Python';
        } else {
            return 'JavaScript';
        }
    }
    static multiply(a, b) {
        return a * b;
    }
}

akshat = new Programmer("Akshat", 3, "Management", "JavaScript", "akshatcoder_12");
console.log(akshat);
console.log(akshat.language);
console.log(akshat.github);