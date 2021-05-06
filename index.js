// # Map, Filter, Reduce

// #### 1. Get total orders
// * Return the total amount of orders. 

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];

const startingPoint = 0;
const ordersTotal = orders.reduce(((acc, curr) => acc + curr.amount), startingPoint);
console.log(ordersTotal);


// #### 2. Increment by 1
// * Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements.

const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 

const modifiedNumberArray = arrayOfNumbers.map(number => number + 1);
console.log(modifiedNumberArray);

// #### 3. Filter Evens
// * Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

// very long version with uncessary stuff
// const filterEvens = array => {
//     const evenNumbers = [];
//     array.filter(number => {
//         if (number % 2 === 0) {
//             evenNumbers.push(number);
//         };
//     });
//     return evenNumbers;
// };

// short version
const filterEvens = array => array.filter(number => number % 2 === 0 ? true : false);

console.log(filterEvens([1,2,3,11,12,13])); //returns [2,12]
console.log(filterEvens([22,2,31,110,6,13])); //returns [22,2,110,6]

// #### 4. Filter Friends
// * Given an array, create a function which filters array based on a search query.

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

const filterItems = (array, string) => array.filter(element => element.includes(string) ? true : false);

console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

// #### 5. Sum Up
// * Write a function called sum that uses the reduce method to sum up an array of numbers. 

const sum = (array) => array.reduce((acc, curr) => acc + curr);

console.log(sum([1,2,3,4,5])); //returns 15
console.log(sum([6,7,7])); //returns 20


// #### 6. Square Root
// * Given an array of numbers, find the square root of each element in the array.

const getSquareRoot = (array) => array.map(number => Math.sqrt(number));

console.log(getSquareRoot([81, 25, 9, 49, 16]));