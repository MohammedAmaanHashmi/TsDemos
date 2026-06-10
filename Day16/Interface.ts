export { }
/*
/**
 * 1. An interface in TypeScript is a way to define the structure of an object.
 * 2. It tells the compiler what properties and types an object should have.
 * 3. It's like a blueprint for objects.
 
/*
interface InterfaceName
{
    properties
    abstract methods
}

1 Regular properties
2 Optional properties
3 Readonly properties & function types
4 Extending interfaces
5 Class implements interface
*/

//Example 1: Basic interface

interface Person {
    name: string;
    age: number;

}

let student: Person = {
    name: "John", age: 30
}

console.log(student.name);
console.log(student.age);
console.log(student) //{ name: 'John', age: 30 }

//Example 2: Optional Properties (?)

interface Employee {
    eid: number;
    ename: string;
    edpartment?: string; //optional Property
}

let emp: Employee = {
    eid: 101,
    ename: "John"
}

let emp1: Employee = {
    eid: 102,
    ename: "Smith",
    edpartment: "accounts",
}
console.log(emp.eid, emp.ename, emp.edpartment);
console.log(emp1.eid, emp1.ename, emp1.edpartment); //101 John undefined

//Example 3: Readonly property (readonly to prevent modification) $ Function type
interface Book {
    title: string;
    readonly isbh: string;

    display(): void

}

let b1: Book = {

    title: "Learn Playwright",
    isbh: "123-ABC",

    display(): void {
        console.log(b1.title, b1.isbh);
    }
}
console.log(b1.title); //Learn Playwright
console.log(b1.isbh);  //123-ABC
b1.display();

console.log("After changing values...");
b1.title = "Learn Typescript";
console.log("After changing title", b1.title);
//b1.isbh = "123-XYZ"; //Error: Cannot assign to 'isbh' because it is a read-only property.

//Example 4: Extending  Interfaces (Inheritance is applicable)

/*
//Parent Interface
interface Animal {
    name: string;

}

//child Interface
interface Dog extends Animal {
    colour: string;
}

let myDog: Dog = {
    name: "Buddy",
    colour: "Black"
}

console.log(myDog.name, myDog.colour); //Buddy Black
*/

//Example 5:
// class can extends another class
// interface can extends another interface
// class can implement interface

interface Animal {
    name: string;  ///
    sound(): void;
}

class Dog implements Animal {
    name: string; //inherited from interface Animal
    colour: string; //Property belongs to Dog
    constructor(name: string, colour: string) {
        this.name = name;
        this.colour = colour;
    }

    sound(): void {
        console.log("bark...");
    }
}

let pet = new Dog("Tommy", "black");
console.log(pet.name); //Tommy
console.log(pet.colour); //black
pet.sound();  //black