export { };

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange", "mango"];

console.log("numbers array", numbers);
console.log("fruits array", fruits);

//length - attribute (Not a method);
console.log("size of numebrs array:", numbers.length); //5
console.log("fruits of numebrs array:", fruits.length); //6

// 1. push() - Adds single/multiple elements to the end of an array
// Syntax: array.push(element1, ..., elementN)
numbers.push(6, 7);
console.log("After push():", numbers);

//2. pop() - Removes the last element from an array
//syntax: array.pop()
let lastFruits = fruits.pop();

console.log("After pop():", fruits);
console.log("Removed fruit is:", lastFruits);

// 3. shift() - Removes the first element from an array
// Syntax: array.shift()

let firstNumber = numbers.shift();
console.log("After shift()", numbers); //[ 2, 3, 4, 5, 6, 7 ]
console.log("Removed Number:", firstNumber); //1

fruits.unshift("kiwi", "pear");
console.log("After unshif():", fruits);

// 5. concat() - Combines two or more arrays of same type
// Syntax: array.concat(array1, ..., varrayN)

let combinedArray = numbers.concat([8, 9, 10]);
console.log("concatinated Array:", combinedArray);

// 6. slice() - Extracts a section of an array
// Sorting Index starts from Zero
// Ending Index will be exclusive. Ex: If 3 is Ending Index It will consider 2 (3-1=2)
// Syntax: array.slice(start, end)

//let extractedArray = fruits.slice(1, 3);
let extractedArray = fruits.slice(2, 5);
console.log("After slice()", extractedArray);

// 7. splice() - Adds/removes elements from an array (from anywhere)
// Syntax: array.splice(start, deleteCount, item1, ..., itemN)

console.log("current elements in fruits array:", fruits); // [ 'kiwi', 'pear', 'apple', 'banana', 'orange' ]

//EX1
let removedElements = fruits.splice(1, 2); // here 1 is starting index 2 is represent how many elements to be removed
console.log("After splice(1,2): ", fruits);
console.log("Removed Elements: ", removedElements);

//EX2: not remvoed but added
fruits.splice(1, 0, "pineapple", "grape");
console.log("After splice(1,0,'pineapple','grape'): ", fruits); //[ 'kiwi', 'pineapple', 'grape', 'banana', 'orange' ]

//EX3: both removed and added
fruits.splice(1, 2, "mango", "cherry");
console.log("After splice(1,2,'mango','cherry'): ", fruits); //[ 'kiwi', 'mango', 'cherry', 'banana', 'orange' ]

// 8. indexOf() - Finds the index of an element, If element not found then return -1
// Syntax: array.indexOf(searchElement) (or) array.indexOf(searchElement, Starting Index)

//Ex 1:
let bananaIndex = fruits.indexOf("banana");
console.log("Index of banana: ", bananaIndex); //3

//Ex 2:
let appleIndex = fruits.indexOf("apple");
console.log("Index of papaya: ", appleIndex); //-1

bananaIndex = fruits.indexOf("banana", 2);
console.log("Index of banana: ", bananaIndex); //3

// 9. includes() - Checks if an element exists
//True or false
// Syntax: array.includes(searchElement, fromIndex)

let isAppleExist = fruits.includes('apple');
console.log("Does fruits include apple?", isAppleExist); //false

let isBananaExist = fruits.includes('banana');
console.log("Does fruits include apple?", isBananaExist); //true

//10. to string() - converts array to string
//syntax: array.toString()

console.log(numbers);//[2, 3, 4, 5, 6, 7]
let numberString = numbers.toString();
console.log(numberString); //2,3,4,5,6,7

let myArray: string[] = ["w", "e", "l", "c", "o", "m", "e"];
console.log("orignal myArray: ", myArray);

let str = myArray.toString();
console.log("converted string: ", str);