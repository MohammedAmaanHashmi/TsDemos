export {};
//A callback function : A function passed as an argument to another function and executed later.

//Example 1:

//Function that takes callback function as an parameter
/* function greet(name:String,callBack:(message:string)=>void)
{
    console.log(name);
    callBack("Hello"); //executing the callback function
}


function showMessage(message: string) {
    console.log(message);
}

// showMessage("Welcome");
greet("John", showMessage) */

//Example 2:
function sum(a: number, b: number, callBack: (result: number) => void) {
    let result = a + b;
    displayResult(result);
}


function displayResult(result: number): void {
    console.log(result);
}

sum(10, 20, displayResult);