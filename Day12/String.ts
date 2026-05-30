// string - Text value or a combination of characters
/*
1. Single Quote - String Literal ('SingleQuote')
2. Double quote - String literal ("DoubleQuote")
3. backtick (`) - String template - When we try to use a string variable inside another string value ${variable}

// index in string starts with 0


'' or "" or ``(backtick)
*/

//Declaration of strings
let str1: string = 'This is a string with single quote';
let str2: string = "This is a string with double quote";
let str3: string = `This is a string with back tick`;

console.log(str1);
console.log(str2);
console.log(str3);

// When to use back tick
let num: number = 10;
console.log("Number is:", num); //10 //Valid
console.log("Number is: num"); //not valid
console.log("Number is: ${num}"); //not valid
console.log('Number is: ${num}'); //not valid
console.log(`Number is: ${num}`); // Number is: 10 valid

//String methods
let str: string = "Hello, Typescript!";

//1. length - find the length of the string(how many number of characters)
console.log("Length of a string: ", str.length); //18;

//2. toUpperCase() and toLowerCase()
console.log("Upper case:", str.toUpperCase()); //HELLO, TYPESCRIPT!
console.log("Lower case:", str.toLowerCase()); //hello, typescript!

//3. charAt(index) and indexOf(String)
console.log("character at 4th index: ", str.charAt(4)); //0
console.log("index of Type: ", str.indexOf("Type")); //7

//4. substring(Starting index, ending index);
//ending index is exclusive
//string value is case senstive
console.log(str.substring(0, 5));

//5. includes(); returns true or false(boolean);

console.log(str.includes("abc")); //false
console.log(str.includes("Typescript")); //true
console.log(str.includes("!")); //true
console.log(str.includes("TYPESCRIPT")); //false

//6. startWith() and endsWith()  --> returns a boolean value
console.log("starts with: ", str.startsWith("Hello")); //true
console.log("ends with: ", str.endsWith("!")); //true
console.log("ends with: ", str.endsWith("abc")); //false


//7. replace()
//Hello, Typescript!

console.log("Replaced string ", str.replace("Typescript", "World")); //Hello, World!

//8. split() - break the string into multiple parts based on the delimeter, returns to array
//Ex1:
let words: string[] = str.split(" ");
console.log("After splitting string:", words); //[ 'Hello,', 'Typescript!' ]

//EX2:
let mystring: string = "abc@gmail.com,xyzabc";
let arr: string[] = mystring.split(",");
console.log("email:", arr[0]);
console.log("password:", arr[1]);

//9 trim(), trimStart(), trimEnd()
mystring = "   Welcome to Typescript   ";
console.log("Original string:", mystring);//    Welcome to Typescript 
console.log("trim string:", mystring.trim());// Welcome to Typescript
console.log("trimStart string:", mystring.trimStart()); //"Welcome to Typescript   "
console.log("trimEnd string:", mystring.trimEnd()); //    Welcome to Typescript

//10. concat()
str1 = "Welcome";
str2 = "to typescript";
str3 = "and javascript";

console.log("After concatenation:", str1.concat(str2)); //Welcometo typescript
console.log("After concatenation:", str1 + str2); //this is an alternative but not recommended
console.log("Welcome".concat("to typescript")); //welcometo typescript

console.log(str1.concat(str2).concat(str3)); //Welcometo typescriptand javascript

// concept of string immuatablity

//num=10;

let res = num + 5;
console.log(res); //15
console.log(num); //10;

str1 = "welcome";
let modifiedString = str1.concat("to typescript");
console.log(modifiedString); //welcometo typescript
console.log(str1); //welcome

//Multiline string

let multiline: string = `welcome
                         to typescript`;
console.log(multiline);



