/*
1) Primitive Data Types

Number
String
Boolean
Null
Undefined
Any
Union Type
Void


2) Non-Primitive Data Types (Objects)

Array
Class
Function
Interface
Touple etc..

*/

// 1. NUMBER TYPE
// Represents both integers and floating-point numbers

/* let age: number = 25;
let price: number = 25.5;
let big: number = 5245454545;
console.log("Age: ",age);
console.log("price: ",price);
console.log("Big Number: ",big);

console.log(typeof(age));

console.log(typeof age); */

/* 
// 2. STRING TYPE
 // Represents textual data
 */

/*
1. SingleQuote (' ')
2. DoubleQuote (" ")
3. Backtick (` `)
*/

/* let firstname:string="John";
let lastname:string="Kennedy";
//console.log("Hello",firstname,lastname);//Hello John Kenedy

let greeting:string=`Hello ${firstname} ${lastname}`;
console.log(greeting);
 */

//

//3. Boolean Type
// Represents true/false values

/* let isStudent: boolean = true;
let hasJob: boolean = false;

console.log("Is student?",isStudent); //Is student? true
console.log("HasJob student?",isStudent); //HasJob student? true */

//4. Null & UNDEFINED
//Special types for absense of value

/* let emptyValue:null=null;

let notAssigned:undefined=undefined;

console.log(emptyValue);
console.log(notAssigned);

let price:number;
console.log(price); //undefined */

//5. Any type
//loses Typescript benefits

/* let value:any="Welcome";
console.log(typeof(value));

value=100;
console.log(typeof(value));

value=true;
console.log(typeof(value));
console.log(value); */

//6 UNION Ty
