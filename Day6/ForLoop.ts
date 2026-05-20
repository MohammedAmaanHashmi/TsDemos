export {};

// For Loop: A for loop is typically used when the number of iterations is known beforehand.

/*
for(initialization; condition ; ift/dec)
{
    //statements;
}
*/

//Example 1: print 1......10
/* for (let i = 1; i <= 10; i++) {
    console.log(i);
} */

//Example 2: print even numbers between 1---10

//Method1:

/* for (let i= 2; i <= 10; i += 2) {
    console.log(i);
} */

//Method 2: Even Numbers
/* for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }

} */

//Method =3: odd Numbers
/*  for (let i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }

}  */

/* for (let i = 10; i >= 1; i--) {
    console.log(i);
} */

//Example 4:
/* let i: number;  //global variable

for (i = 1; i <= 5; i++) {
    console.log(i);  //1.....5
}

console.log(i); //6
 */
//TestDemo

for (let i = 1; i <= 10; i++) {
  console.log("Test");
  console.log(i);
  console.log("Hello world");
}
