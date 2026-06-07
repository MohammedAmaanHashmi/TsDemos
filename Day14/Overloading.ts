// method overloading and constructor overloading in typescript
class calculator {

    constructor(); //default constuctor;
    constructor(a: number, b: number); //Paramterrized constructor

    constructor(a?: number, b?: number) {

        if (a !== undefined && b !== undefined) {
            console.log("sum of a && b :", (a + b));
        }
        else {
            console.log("Default constructor called....")
        }
    }

    // Method overloading
    add(a: number, b: number): number;
    add(a: number, b: number, c: number): number;

    add(a: number, b: number, c?: number): number {

        if (c !== undefined) {
            return a + b + c;
        }
        return a + b;
    }
}

// Usage

//Constructor overloading
let cal1 = new calculator();
let cal2 = new calculator(10, 20);

//Method overloading
console.log("Adding 2 numbers from s1 object:", cal1.add(10, 20));
console.log("Adding 3 numbers from s1 object:", cal1.add(10, 20, 30));

console.log("Adding 2 numbers from s2 object:", cal2.add(10, 20))
console.log("Adding 3 numbers from s2 object:", cal2.add(10, 20, 30));
