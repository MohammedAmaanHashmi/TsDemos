// Variable: container which can hold/store some data

// Var, let, Const

//Syntax: Keyword variableName :data type(optional)=value
//Ex:     var age:number=30
//Ex:     var age=30

// var age=30;
// console.log(age);

//var vs let vs cont
//-------

// 1) Scope
// 2) Declaration/Value Assignment
// 3) Re-declaration
// 4)Re-initialization/Re-assignment
// 5) Hoisting
// 

//Scope Accesible area (Funcitonal scope(var) & Block Scope(let,Const))

//Example2 : 1 var (Functional Scope)

/* function varScope() {
    if (true) {
        var msg = "Hello world";
        console.log(msg);
    }

    console.log(msg);
}

varScope(); */

//Example 2: Block Scope(let,Const))
/* function blockScope() {
    if (true) {
        let msg = "Hello world";
        const greet = "Hello Const";
        console.log(msg);
        console.log(greet);
    }
    // console.log(msg);  // cannot access
    // console.log(greet); // cannot access

}

blockScope(); */

//Example3: 
function scopeDiff() {
    if (true) {
        var var1 = 10;
        let var2 = 20;
        const var3 = 30;
        // console.log(var1);
        // console.log(var2);
        // console.log(var3);
    }
   /*  console.log(var1); //access - functional 
    console.log(var2); //Cannot access - block
    console.log(var3);  //Cannot access - block */
}
scopeDiff();

// 2) Declaration/value Assignment
//Example1: var can be declared without intialization
/* var x; //declaration
console.log(x); //undefined
x=30; //intialization
console.log(x); */

//Example2: let can be declared without intialization
/* let y; //declaration
console.log(y); //undefined
y=30; //intialization
console.log(y); */

//Example 3: const must be intialize at the time of declaration
// const z; //incorrect
// const z=50; //correct
// console.log(z);

//3) Re-declaration
//var - allows the Re-declaraion
//let and const -not allows the Re-declaration (making code Safer)

//Example 1: var allows the re-declaration
/* var city="New York";
var city="Los Angeles";
console.log(city); */

//Example 2: let - not allowed re-declaration
/* let country="India";
let country="Us";
console.log(country);
 */

//Example 3: Const - not allowed re-declaration
/* const planet="Earth";
const planet="Mars";
console.log(planet); */

 //4) Re-initialization/Re-assignment
 //var and let - Re-assignment Allowed
 //const - Re-assignment Not allowed (Only constants allowed- cannot change the value)

// Example 1: var allows re-assignment
/* var age=25;
age=30; //allowed
console.log(age); */

// Example 2: let allows re-assignment
/* let age=25;
age=30; //allowed
console.log(age); */

// Example 3: const not allows re-assignment
/* const age=25;
age=30; //not allowed
console.log(age); */

//5) Hoisting - var (Hoisted with undefined),

/* console.log(a); //Undefined
var a=10;
console.log(a); */

/* console.log(a); //Not initialized
let a=10;
console.log(a); */

/* console.log(a); //Not initialized
const a=10;
console.log(a); */


