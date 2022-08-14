// // Keyword in JS
// // reserved which cannot used as var name 

// var num; // variable declaration( we say this is a var )

// num = 100; // initialization ( Giving some value at first )


// // Set of statement put together
// function sum() { // function declaration
//   console.log("");
// }


// // Datatypes Number, sting, boolean, undefined, null



// var num1 = 80;

// console.log(10 / 5); // 2 quotient
// console.log(11 / 5); // 2

// console.log(11 % 5); // 1 remainder of 11 / 5

// // Find whether number is a multiple of five 
// // when a number divided gives zero as remainder then it is a multiple

// // if (num1 % 5 == 0) {
// //   console.log("True");
// // } else {
// //   console.log("False");
// // }

// // Arthematice Operators
// // +, -, *, /, % --> remainder of a division eg: 12 % 6 --> 0 13 % 5 --> 1

// // Logical Operators
// // &, |, ! ---> negetion( false -> true, true -> false )

// // &&, ||, 
// // Year is leap Year or not
// // what is a leap year
// // Leap

// var year = 1990;

// if (year % 4 == 0) {
//   console.log('True');
// } else {
//   console.log('False');
// }

// var age = 12;
// var cls = 7;

// // Display true if age -> 12 and class -> 8

// if (age == 12 && cls == 8) {
//   console.log('True');
// } else {
//   console.log('False');
// }

// // string, number, boolean ---> Primitive Datatypes

// var name = "Sanjay";
// var Age = 25;
// var role = 'Devoper'
// var isGraduated = true;

// Composite Datatypes( Combined Types )

// Array 
// var arr = [1, 2, "Sanjay", true];

// Get the Length
// console.log(arr.length);

// x = 0; x++ --> x = x + 1; 


// Iterating --> for a particular array going one by one
// for (var i = 0; i < 4; i = i + 1) {
//   console.log(arr[i]); // print ith element of array
// }

// for (var i = 0; i < arr.length; i = i + 3) {
//   console.log(arr[1]); //print ith element of array eg: arr[0] -> first element 1. arr[1] second element 2
// }


// i = i + 1, i++, i += 1

// i = i - 1, i--, i -= 1

// i = i * 1, i *= 1

// i = i / 1, i /= 1

// x = 1
// Follwing statements will increment x by 1
// x = x + 1
// x++
// x += 1

// Iterating for of
// For of

// No Increment Var needed
//         0  1     2       3
// var arr = [1, 2, "Sanjay", true];
// console.log(arr);
// for (var value of arr) {
//   console.log(value);
// }

// sectioning/slicing an array
// slice(start, end) will give sliced array of start to end-1 index elements as a new array
// console.log(arr.slice(1, 3)); // 1 to 2(3-1) [ 2, 'Sanjay']

// Functions are the blocks of code used to execute a set of statements
// Function definition/declaration

function DisplayInfo() {
  console.log("#####");
  console.log('Hello Wold');
  console.log("Hi Hello");
}

// Execution/Calling/Invoking of a function
// DisplayInfo();

var name = "Saravanan";

// Passing Parameters/arguements to a function
function DisplayParams(name, age, role) {
  console.log("Name is", name);
  console.log("Age is", age);
  console.log("Role is", role);
}

// Function Call with params
// DisplayParams('Sanjay', 40, 'developer');

// Return statement
function addMarks(mark1, mark2, mark3) {
  return mark1 + mark2 + mark3;
}

// var totalMarks = addMarks(90, 55, 80);

// console.log(totalMarks);

// Types of functions
// ES 5
// Function keyword function
function Sum(a, b) {
  return a + b;
}

// ES 5
// function expression
var Sum = function (a, b) {
  return a + b;
}

// ES 6
// Arrow function
var Sum = (a, b) => {
  return a + b;
}

// After discussing about oops we will see the diff between function keyword / normal arrow fucntion

// console.log(Sum(10, 20));


// Js Object ( key <-> pair )
// var personObj = {
//   firstName: 'Sanjay',
//   lastName: 'Saravanan',
//   DOB: 'yyyy-mm-dd',
//   role: 'developer',
//   age: 'xx',
//   location: 'chennai',
//   nationality: 'india',
//   skills: ['JS', 'Python', 'C++']
// }

// personObj['firstName'] or personObj.firstName ==> Sanjay

// First Name: Sanjay
// Last Name: Saravanan
// .
// .
// .

// for of, for, forEach ---> Array

// for in use in Array / Object
for (var key in personObj) {
  // console.log(key, personObj[key]);
}
//         0  1     2        3
var arr = [1, 2, "Sanjay", true];

for (var x in arr) {
  // console.log(x, arr[x]);
}


// forEach can only used with arr
// forEach iterates through an taking with a function with three params value, index, array
arr.forEach(function (x, index, paramaArr) {
  // console.log("Value", x);
  // console.log("Index", index);
  // console.log("Complete Array", paramaArr);
  // console.log("Something");
});

// Object 
var personObj = {
  firstName: 'Sanjay',
  lastName: 'Saravanan',
  DOB: 'yyyy-mm-dd',
  role: 'developer',
  age: 'xx',
  location: 'chennai',
  nationality: 'india',
  skills: ['JS', 'Python', 'C++'],
  projects: [
    { name: 'RC Toy CAR', langs: ['Python', 'JS'] },
    { name: 'Hotel Booking Application', lang: ["JS", 'Python'] }
  ]
}

// Object keys
// console.log(Object.keys(personObj));

// with key we can get value but **with value You cannot get key**
Object.keys(personObj).forEach((x) => console.log(x, personObj[x]));

// Object values
console.log(Object.values(personObj));


// JSON --> Javascript Object Notation