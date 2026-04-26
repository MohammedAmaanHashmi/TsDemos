export{}
/// Arrow Functions / Lambda Function

/* Lambda refers to anonymous functions in programming.
  Lambda functions are a concise mechanism to represent anonymous functions.
  These functions are also called as Arrow functions.

There are 3 parts to a Lambda function.

1. Parameters - A function may optionally have parameters
2. The fat arrow notation/lambda notation (=>) - It is also called as the "goes to operator"
3. Statements - represent the functions instruction set

Syntax:
{
  let variable = (parameters) =>
  {
    // block of code
  }
  variable();
}*/

//Example 1: Arrow Function with no parameters and No return Type
/* let greet=(): void => {
    console.log("Hello Typescript");
}

greet(); */

let res=(a:number, b:number):number=>{
    return a*b;
}

console.log(res(10,20));

