export { }
// ========== forEach(), map(), filter(), reduce(), some(), every() ============

// 1. forEach() - Executes a function once for each array element
// It Takes function as a parameter

//syntax: array.forEach(function(currentvalue,index,array){})
// currentValue - The current element being processed in the array
// index (optional) - The index of the current element being processed in the array
// array(optional) - The array the current element belongs to.

//Ex1: Get index of all the fruites along with value.
let fruits: string[] = ["apple", "banana", "orange", "mango", "kiwi"];

console.log("Printing fruites along with index using for loop.....")

for (let i in fruits) {
    console.log(i, fruits[i]);
}

console.log("Printing fruites along with index using for each method.....");

fruits.forEach(function (element, index) {
    // console.log(`${index}`, `${element}`); 
    console.log(index, element);
})

//using arrow function

fruits.forEach((element, index) => {
    // console.log(`${index}`, `${element}`)
    console.log(index, element);
});

//EX2:
fruits.forEach((element) => {
    console.log(element.toUpperCase());
});


// 2. map() - Creates a new array with the result of calling the function on every element of an array
// It Takes function as a parameter.
// Returns the same number of elements that we have in original array.

// Syntax: array.map(function(currentValue, index, array){}
// Ex1: Get square of all the numbers in an array. Ex: [1,2,3] then result should be [1,4,9]

let number: number[] = [1, 2, 3, 4, 5];

let squaredNumbers = number.map(function (element) {
    return element * element;
});

console.log("Squared numbers: ", squaredNumbers); //[ 1, 4, 9, 16, 25 ]
console.log("Original array: ", number); //[ 1, 2, 3, 4, 5 ]

//EX2 Double the each number

/* let doubledValues = number.map((element) => {
    return (element * 2);
}); */

let doubledValues = number.map((element) => element * 2); //if you have single return statment inside arrow function then {} and return statment are optional
console.log("Double values: ", doubledValues);

// 3. filter() - Creates a new array with all the elements that pass/satisfy the function
// It Takes function as a parameter.
// Returns either same or fewer number of elements compared to original array.

// Syntax: array.filter(function(currentValue, index, array)){}

//EX 1: Get the only even numbers from an array

/* let evenNumbers = number.filter((number) => {
    return (number % 2 == 0);
}); */

let evenNumbers = number.filter((number) => number % 2 == 0);
//console.log("Even Numbers: ", evenNumbers);

//EX2: Get the only numbers greator than 3 from an array

let filteredNumbers = number.filter((num) => num > 3);
console.log("Numbers greator than 3:", filteredNumbers);


// 4. reduce() - Applies a function on every element of an array and returns a single value.
// Syntax: array.reduce(function(accumulator, currentValue, index, array){})
// accumulator - The accumulated value from previous iteration
//current value - The current element being processed

//EX1: Get the total (sum) of all elements in an array
/* let total = 0;

for (let i = 0; i < number.length; i++) {
    total = total + number[i];
}
console.log("sum of the numbers: ",total); */

//using reduce method

/* let rescueResult = number.reduce((total, element) => {
    return total + element;
}, 0); //Here 0 is default value of accunulator */


let rescueResult = number.reduce((total, element) => total + element, 0); //Here 0 is default value of accunulator

console.log("Sum of elments in array: ", rescueResult);

// 5. some() - Checks if any element satisfies a condition
// Returns true if at least one element passes the condition, else false

// Syntax: array.some(function(currentValue, index, array){})

//EX 1: Check array contains negative values

let hasNegative: boolean = number.some((element) => element < 0);
console.log("Does arrayc contains negative? ", hasNegative);

//EX 1: Check array contains positive values

let hasPositvie: boolean = number.some((element) => element > 0);
console.log("Does array contains positive? ", hasPositvie);


// 6. every() - Checks if all elements satisfy a condition
// Returns true if all elements pass the condition, else false
// Syntax: array.every(function(currentValue, index, array){})

//Ex1: 
let allEven = number.every((element) => element % 2 == 0);
console.log("Are all numbers are even? ", allEven); //false

//Ex2:
let allGreateorThanOne = number.every((element) => element >= 1);
console.log("Are all the numbers greator or equal to one?", allGreateorThanOne); //true

//Ex3: 
let allPositive = number.every((element) => element >0);
console.log("Are all the numbers greator or equal to one?", allPositive); //true


