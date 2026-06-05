//object -- object contains properties and behaviour.
// object contains variables & methods
// object is collection of key and value pairs.

//Ex:

//employee -- name, desig, sal, dep
//            bonus(), getemdetails(), setdetails()

//student -- name, sid, grade
//           getdetails(), setdetails()

// Different ways to create an object in JS/TS //

// 1. using 'object' type - Directly define the values for variable (JS/TS)
// 2. Inline Type Object - We also define the datatype of the keys (TS)
// 3. Using Type aliases (TS)
// 4. Using the classes (JS ES16/TS)


// 1. using 'object' type - Directly define the values for variable
// The TypeScript 'object' type represents all values that are not in primitive types.

let employee1: object = {
    name: "John",
    age: 30,
    salary: 50000,
    job: "Engineer"
};

let employee = {
    name: "John",
    age: 30,
    salary: 50000,
    job: "Engineer",
    getDetails: function (): string {
        // console.log(this.name, this.age, this.salary, this.job);
        return `${this.name} is a job ${this.job} earning ${this.salary}`;
    }
};


console.log(typeof (employee)); //object

//acessing object - apporach 1 (using . notation)
console.log(employee.name, employee.age, employee.job, employee.salary); //John 30 Engineer 50000
console.log(employee.getDetails()); //John is a job Engineer earning 50000

//accessing an object approach2 (using bracket notation)
console.log(employee["name"], employee["age"], employee["job"], employee["salary"]); //John 30 Engineer 50000
console.log(employee["getDetails"]());

// Modify the value
employee.job = "Manager";
//employee["job"] = "Manager";
console.log("Modified job is:", employee.job); //Manager

//====================================================================
// 2. Inline Type Object - We also define the datatype of the keys (TS)

let student: {
    name: string,
    age: number,
    grade: string,
    getSummary: () => string
} =
{
    name: "Scott",
    age: 15,
    grade: "A",
    getSummary: function () {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }

}

console.log(student.getSummary()); //Scott is 15 years old and scored grade A

// Problem with Inline type object: Need to repeat structure for every Object
let student1: {
    name: string,
    age: number,
    grade: string,
    getSummary: () => string
} =
{
    name: "Marry",
    age: 15,
    grade: "B",
    getSummary: function () {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }

}

console.log(student1.getSummary());  //Marry is 15 years old and scored grade B

//========================================================
// 3. Using 'type' aliases (TS): allows creating a new name for an existing type

//Example 1:

type Product = {
    name: string,
    price: number,
    getInfo: () => string;
};

let book1: Product =
{
    name: "learn Java",
    price: 300,
    getInfo: function () {
        return `${this.name} cost ${this.price}`
    }
}

let book2: Product =
{
    name: "learn Python",
    price: 500,
    getInfo: function () {
        return `${this.name} cost ${this.price}`
    }
}

let book3: Product =
{
    name: "learn JS",
    price: 600,
    getInfo: function () {
        return `${this.name} cost ${this.price}`
    }
}

console.log(book1.getInfo()); //learn Java cost 300
console.log(book2.getInfo()); //learn Python cost 500
console.log(book3.getInfo()); //learn JS cost 600

// Example 2: Intersection Types

type Personal = {
    name: string,
    age: number,
}

type Contact = {
    email: string,
    phone: number,
}

type Candidate = Personal & Contact &
{
    getContactInfo: () => string;
}

let cand: Candidate = {
    name: "Scott",
    age: 25,
    email: "scott@gmail.com",
    phone: 9867818890,
    getContactInfo: function () {
        return `${this.name} can be contacted at ${this.age} ${this.email} or ${this.phone}`;
    }
}

console.log(cand.getContactInfo());


//===============================
// 4. Using the classes (JS ES16/TS)

class Person {

    ssn: string;
    firstname: string;
    lastname: string;

    constructor(ssn: string, firstname: string, lastname: string) {
        this.ssn = ssn;
        this.firstname = firstname;
        this.lastname = lastname;
    }


    getFullName(): string {
        return `${this.firstname} ${this.lastname}`;
    }

    getDetails(): string {
        return `SSN: ${this.ssn}, Name: ${this.getFullName()}`
    }

}

//Object creation
let person1 = new Person('123213123123', 'John', 'Kenndy');
console.log(person1.getDetails());


let person2 = new Person('222222', 'David', 'D');
console.log(person2.getDetails());

let person3 = new Person('555667', 'Scott', 'S');
console.log(person3.getDetails());

