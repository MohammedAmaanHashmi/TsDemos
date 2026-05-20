export {};

//while loop : A while loop executes as long as the condition is true.

/*
while(condition)
{
    statements;
}
*/

// Example1: print 1......10

/* let i:number=1; //intilization

while(i<=5)
{
    console.log(i);
    i++;
}
 */

// Example 2: print even numbers 1....10

//Method 1
/* let i:number=2;
while(i<=10)
{
    console.log(i);
    i+=2; //i=i+2;
} */

// Method2:
/* let i: number = 1;

while (i <= 10) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}
 */

//Example 3: print odd numbers 1......10

/* //Method 1
let i: number = 1;
while (i <= 10) {
    console.log(i);
    i += 2;
} */

//Method 2
/* let i: number = 1;
while (i <= 10) {
    if (i % 2 != 0) {
        console.log(i);
    }

    i += 2;
}  */

// Example 4: print numbers 10,9,8....1
/* let i: number = 10;
while (i >= 1) {
    console.log(i);
    i--;
} */

//Infinite loop - when the condition never become false them it will go to infinite loop
while (true) {
  console.log(1);
}
