export { }
//do-while loop : A do-while loop always executes at least once before checking the condition.

/*
Syntax:
do
{
    //statements;
}while(condition);

I
*/

//Example1: 
/* let i:number=10;
do{
console.log(i);
i++;
}
while(i<=5); */

//Example 2: 10 9 8 ......1 (descending order)
let i: number = 10;

do {
    console.log(i);
    i--;
}
while (i >= 1);
