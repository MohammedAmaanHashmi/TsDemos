export {};
//if condition

/* if(condition)
{
    //statements
} */

// Example1 : If age is greater than or equal to 18, the message "You are eligible to vote." will be printed.

/* let age: number = 15;
if (age >= 18) {
    console.log("you are eligible for vote");
} */

//if else conditon
/*
if (condition)
{
  statements
}
else{
    //statements;
 }

*/

//Example 2: If num is divisible by 2, it is even; otherwise, it is odd.

/* let num:number=15;
if(num%2==0)
{
console.log(`${num} : Even Number`);
}
else{
console.log(`${num} : odd Number`);
} */

//Nested if else

/*
if(condition 1)
{
    statements;
}
else if(condition 2)
{
    statements;
}
else if(condition 3)
{
    statements;
}
else
{
    statements;
}
*/

//Example3: Depending on the marks display appropriate grade.
/*  
81    marks >=90   Grade A  
82    marks >=75   Grade B  
83    marks >=60   Grade C  
84    Grade D
*/

/* let marks: number = 60;
if (marks >= 90 && marks <= 100) { //Condition 1
    console.log("Grade A");
}
else if (marks >= 75 && marks < 90) { //Condition 2
    console.log("Grade B");
}
else if (marks >= 60 && marks < 75) { //Condition 3
    console.log("Grade C");
}
else{
    console.log("Grade D");
}
 */

// Example 4: Browser selection
/* let browser: string = 'Safari';

if (browser === "Chrome") {
  console.log("Browser is chrome");
} else if (browser === "Edge") {
  console.log("Browser is Edge");
} else if (browser === "Safari") {
  console.log("Browser is Safari");
} else {
  console.log("Other Browser");
}
 */

/*  
switch (expression)  
{  
case value 1: statements;  
    break;  
case value 2: statements;  
    break;  
case value 3: statements;  
    break;  
default : statements;  
}
*/

//Example 5: Depending on the value of day, print the coressponding day of the week

/*let day: number = 9;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuseday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid week");
}*/

//Example 6: The switch statement can also include an expression

let x: number = 20,
  y: number = 5;
switch (x - y) {
  case 0:
    console.log("Result is zero");
    break;

  case 5:
    console.log("Result is five");
    break;

  case 10:
    console.log("Reslut is ten");
    break;

  default:
    console.log("Result is something else");
}
