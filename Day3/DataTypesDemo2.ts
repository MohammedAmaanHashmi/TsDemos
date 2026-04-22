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

//

/* let age: number = 25;
let price = 25.5;
let big = 43534343;

console.log("Age:", age);
console.log("Price:" + price);
console.log("Big Number:" + big);

console.log(typeof(age));
console.log(typeof age); */

/*
1. SingleQuote (' ')
2. DoubleQuote (" ")
3. Backtick (` `)
*/

/* let firstName:string="John";
let lastName:string="Keneddy";
//console.log("Hello",firstName,lastName); Hello John Keneddy

let greeting:string=`Hello ${firstName} ${lastName}`;

console.log(greeting); */

//3. BOOLEAN TYPE
//Represents true/false Values

let isStudent:boolean=true;
let hasJob:boolean=false;

console.log("Is Student?",isStudent);
console.log("Has Job?",hasJob);

//4. Null and undefined
//Special types for absence of value
/* let emptyValue:null=null;
let notAssigned:undefined=undefined;
console.log(emptyValue);
console.log(notAssigned);

let price:number;
console.log(price); //undefined */

//5. Any Type
//loses Typescript benefits
/* let value:any="Welcome";
console.log(typeof(value));
value=100;
console.log(typeof(value));
value=true;
console.log(value);
console.log(typeof(value)); */

//6. Union Type  - Combine multiple tyeps

/* let id:number|string|boolean;
id="ABCD123";
console.log(id);

id=123;
console.log(id);

id=true;
console.log(id); */

//7. Void Type
//used for functions that don't return anything

/* function show():void
{
    console.log("Welcome");
}

show(); */


function sum(x:number, y:number):number
{
    return (x+y);
}

let res:number=sum(10,20);
console.log(res);