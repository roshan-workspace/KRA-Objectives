"use strict";
class Employee {
    constructor(name, email, employeeId) {
        this.name = name;
        this.email = email;
        this.employeeId = employeeId;
    }
    get employeeInfo() {
        return `Name: ${this.name}, Email: ${this.email}`;
    }
    set changeEmail(e) {
        this.email = e;
    }
}
let e1 = new Employee("Vishwas", "vishwash@gmail.com", 101);
console.log(e1.employeeInfo);
e1.changeEmail = "vishwa@outlook.com";
console.log(e1.employeeInfo);
// this are methods only but can be accessed like properties 
