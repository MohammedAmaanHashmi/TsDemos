export {};
//step 1: write  a signatures of functions
//Step2: implement a function
//Step 3: calling the functions

//1. Example1: Different parameters Types(data types)

/* function getInfo(id: number): string;
function getInfo(name: string): string;

function getInfo(param: number | string): string {

    if (typeof (param) === "number") {
        
        return(`user id is ${param}`);
    }
    else {
        return (`User name is ${param}`);
    }

}

console.log(getInfo(101));
console.log(getInfo("john"));
 */

//Example 2: Different Number of Parameters
// function add(a: number, b: number): number;
// function add(a: number, b: number, c: number): number;
// function add(a: number, b: number, c?: number): number {
//     if (c !== undefined) {
//         return a + b + c;
//     }

//     return a + b;
// }

// console.log(add(1, 2));
// console.log(add(10, 20, 30));

//Example 3: different return types
/*
function processInput(input: string): string;
function processInput(input: number): number;

function processInput(input: string | number): string | number {
    if (typeof (input) === "string") {
        return input.toUpperCase();
    }
    else {
        return input * 2;
    }

}

console.log(processInput("Welcome"));
console.log(processInput(5));
*/

//Example 4
function greet(name: string): string;
function greet(age: number): string;
function greet(isMarried: boolean): string;

function greet(value: string | number | boolean): string {
  if (typeof value === "string") {
    return `Hello ${value}`;
  } else if (typeof value === "number") {
    return `you are ${value} years old`;
  } else {
    let res = value ? "Married" : "Single";
    return res;
  }
}

console.log(greet("John"));
console.log(greet(30));
console.log(greet(true));
console.log(greet(false));
