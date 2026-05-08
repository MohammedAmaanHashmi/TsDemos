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

/* function addNumbers(x: number, y: number): number {
    return x + y;
} */

/* let res: number = addNumbers(3, 4);
console.log(res);
console.log(addNumbers(10, 20)); */
//console.log(addNumbers(10, 20,1)); //Compile Error: Expected 2 arguments, but got 3.
//console.log(addNumbers(10)); //Expected 2 arguments, but got 1.


//Example 3: Need function with Rest parameters
/*
function addNumbers(...num:number[]){
    let i;
    let sum: number = 0;

    for (i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }

    console.log("sum of the numbers", sum)
}

addNumbers(1,2);
addNumbers(1,2,3);
addNumbers(10,20,30,40,50);
*/

//Example 4: Named functions with Rest parameters - multiple types
/* function findElements(...elements: (number | string)[]):number  {
   return elements.length;
}

console.log(findElements(3,"john",2,1,"Scott")); //5
console.log(findElements(3,23,2,1,34,87)); //6
console.log(findElements("John","ui","Amaan","telegram")); //4 */

//Example 5: Named function with optional Parameters
/* function displayDetails(id: number, name: string, mailID?: string): void {
    console.log("ID", id);
    console.log("Name", name);
    if (mailID != undefined) {
        console.log("Email", mailID);
    }
}

displayDetails(123, "scott", "scott@gamil.com");
displayDetails(21, "Amaan"); */


// Example 6: Named function with Default Parameters
function calculateDiscount(price: number, rate: number = 0.50): void {
    let discount = price * rate;
    console.log("Discount Amount", discount);
}

calculateDiscount(1000, 0.30)
calculateDiscount(1000);
