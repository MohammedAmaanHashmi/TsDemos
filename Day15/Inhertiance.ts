// Inheritance:
// A class can reuse the properties and methods of another class.
// Inheritance is a mechanism where one class (child) can inherit the properties and methods of another class (parent).
// Inheritance allows you to reuse the functionality of an existing class without rewriting it.

// A ---- properties + methods     (Parent class / BaseClass / Super class)
// B extends A ---- properties + methods     (Child class / Derived class / Sub class)

// Method Overriding:

// A subclass/child class can provide a specific implementation of a method that is already defined in its superclass.

// The method must have the same name, return type, and parameters.

//Parent class
class Car {

    name: string;
    color: string;
    model: string;

    constructor(name: string, color: string, model: string) {
        this.name = name;
        this.color = color;
        this.model = model;
    }

    start() {
        console.log("Car started..");
    }

    stop() {
        console.log("Car stopped")
    }

    displayInformation(): void {
        console.log(`name: ${this.name}, colour: ${this.color}, model: ${this.model}`);
    }
}

//Child class - Honda
class Honda extends Car {
    year: number;
    constructor(name: string, color: string, model: string, year: number) {
        super(name, color, model);
        this.year = year;
    }

    //Method overriding
    start() {
        console.log("Honda started...");
    }

    yom() {
        console.log(`name: ${this.name}, colour: ${this.color}, model: ${this.model}, yom:${this.year}`);
    }

}

class Maruthi extends Car {
    year: number;

    constructor(name: string, color: string, model: string, year: number) {
        super(name, color, model);
        this.year = year;
    }

    start() {
        console.log("Maruti started...");
    }

    yom() {
        console.log(`name: ${this.name}, colour: ${this.color}, model: ${this.model}, yom: ${this.year}`);
    }


}

//usuage
//Creat Honda object
let honda = new Honda("Honda", "Red", "Honda city", 2024);
console.log(honda.name);
console.log(honda.color);
console.log(honda.model);
console.log(honda.year);
honda.start(); //Honda started... //called child class method(overrided)
honda.displayInformation(); // name: Honda, colour: Red, model: Honda city //Parent class
honda.yom(); //name: Honda, colour: Red, model: Honda city
honda.stop(); //Car stopped

//Create Maruti class object
let maruthi = new Maruthi("Maruthi", "Blue", "Suzuki", 2023);
maruthi.start(); //chid class
maruthi.displayInformation(); //name: Maruthi, colour: Blue, model: Suzuki
maruthi.stop(); // Parent class
maruthi.yom(); // name: Maruthi, colour: Blue, model: Suzuki, yom: 2023

//Parent class variable is holding child class object
let car: Car = new Honda("Honda", "Red", "Honda city", 2024);
car.start(); // Honda started...
car.displayInformation(); //name: Honda, colour: Red, model: Honda city
//car.yom(); //Not accesible yom() defined inside th child class but not then in the parent
