export { }
/*  
 Arrays in TypeScript  
 ---  
 - An array is a special type of variable that stores multiple values.  
 - The values can be of the same data type or different data types.  
 - Arrays are declared using `[]` or the generic `Array<T>` type.  
 - Indexing starts from 0.  
 - Arrays are an ordered collection of elements.  
 */

// Approach 1: using literal
let names: string[] = []; //Declaration

//intilization/assining values

names[0] = "John";
names[1] = "Smith";
names[2] = "Peter";
names[3] = "Scott";

//let names: string[] = ["John", "Smith", "Peter", "Scott"]; //declaration and intialization

//console.log(names);

//Approach 2: using generic way Array<T> type

let empNames: Array<string> = ["John", "Smith", "Peter", "Scott"];
let empIds: Array<number> = [101, 102, 103, 104];

let data: Array<string | number> = ["John", 101, "Smith", 102, "Peter", "Scott"];

let mixedData: Array<any> = [1, "John", true, null];

// console.log(empNames);
// console.log(empNames[1]);
// console.log(empNames.length);

//Example 1: Iterating over an array using a traditional for loop
console.log("Employees Name......");
console.log("Size of an Array:", empNames.length); //4 (How many values stored)

/* for (let i = 0; i <= 4; i++) {

} */


// for (let i = 0; i <= empNames.length - 1; i++) { //i<=empNames.length-1
//     console.log(empNames[i]); //i is respresenting an index
// }

//Example 2: Iterating  using the 'for....in' loop (indexes)

/* console.log("Employees Ids......");

for (let i in empIds) {
    console.log(empIds[i]);
} */

// Example 3: Iterating using the 'for...of' loop(values)
/* for (let value of data) {
    console.log(value);
}
 */
// Example 4: Passing an Array to the function

// Search an element in a n array using function

function search(a: number, arr: number[]): boolean {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === a) {
            return true; //Element found
        }
    }

    return false;

}

/* let arr: number[] = [10, 20, 30, 50];

console.log("Element found: ", search(30, arr)); //true
console.log("Element found: ", search(3, arr)); //false */


//Example 5: A functions takes an Array and returns an array
function capitalizeWords(arr: string[]): string[] {

    let result: string[] = [];

    for (let i = 0; i < arr.length; i++) {

        result[i] = arr[i].toUpperCase();
    }

    return result;
}

let words: string[] = ["hello", "world", "Typescript"]
console.log(capitalizeWords(words));