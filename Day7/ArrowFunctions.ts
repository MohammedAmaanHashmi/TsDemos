export { }
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

//Example 2: Arrow functions with Parameters and a Return type

/* let add = (a: number, b: number): number => {
  return a * b;
}

console.log(add(10, 20)); */

// Example 3: Arrow function with implicit return

/* let multiply = (a: number, b: number): number => a * b;
console.log(multiply(10,29));
 */

// Example 4:  Arrow functions with optional parameters
/* let display = (id: number, name: string, email?: string) => {
  console.log("Id:", id);
  console.log("name:", name);
  if (email != undefined)
    console.log("email:", email);

}
display(21, "Amaan", "amaanhashmi25@gmail.com");
display(24, "Abbas"); */

// Example 6: Named function with default parameters

/* let calculateDiscount = (price: number, item: number = 2): void => {
  let discount = price * item;
  console.log("Discount", discount);
}
calculateDiscount(100, 5);
calculateDiscount(100); */

//Example 6: Arrow functions with Rest parameters
/* let findElements = (...elements: (number | string)[]): number => elements.length;
console.log(findElements(1,2,3,4));
console.log(findElements(1,"amaan","Enter"));
console.log(findElements(1,"amaanhashmi@gmail.com",4,"John","internet"));
 */