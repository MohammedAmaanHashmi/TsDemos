export { }
// Named Function: A function that is declared with a name.

/* Syntax

function functionName(parameter): returnType {
    // block of code
}*/

//functionName(); //calling the function/invoking the function

//Example 1: Named function with no parameters and no return type

/* function display(): void {
    console.log("Welcome to typescript");
}

display(); //calling function */

//Example 2: Named function with parameters and return type

function addNumbers(x: number, y: number): number {
    return x + y;
}

let res: number = addNumbers(3, 4);
console.log(res);
console.log(addNumbers(10, 20));
//console.log(addNumbers(10, 20,1)); //Compile Error: Expected 2 arguments, but got 3.
//console.log(addNumbers(10)); //Expected 2 arguments, but got 1.


//Example 3: Need function with Rest parameters

function add
