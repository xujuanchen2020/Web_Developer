// function Person(firstName,lastName,dob){
//     this.firstName = firstName;
//     this.lastName=lastName;
//     this.dob=new Date(dob);
   // // this.getBirthYear = function(){
   // //     return this.dob.getFullYear()
   // // }
   // // this.getFullName = function(){
   // //     return `${this.firstName} ${this.lastName}`;
   // // }
//}

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear()
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

//class - a prettier way
class Person{
    constructor(firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullName;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}


const person1= new Person('John','Doe','4-3-1988');
const person2 = new Person('Mary','Smith','3-3-1987');
console.log(person2.firstName);
console.log(person2.dob.getFullYear());
console.log(person2.getFullName());
