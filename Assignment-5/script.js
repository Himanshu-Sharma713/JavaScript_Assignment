// Q1. Print Pattern
console.log("Q1. Pattern");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
console.log("------------------------------------------------");

// Q2. FizzBuzz
console.log("Q2. FizzBuzz");
for (let i = 1; i <= 45; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
console.log("------------------------------------------------");

// Q3. Sum of Array
console.log("Q3. Sum of Array");
let numbersArray = [1, 13, 22, 123, 49];
let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i];
}
console.log("Sum is:", sum);
console.log("------------------------------------------------");

// Q4. Sum of Two Arrays
console.log("Q4. Sum of Two Arrays");
let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

function calculateSum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

let sum1 = calculateSum(arr_1);
let sum2 = calculateSum(arr_2);
console.log(`${sum1} + ${sum2} = ${sum1 + sum2}`);
console.log("------------------------------------------------");

// Q5. Reverse Array
console.log("Q5. Reverse Array");
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
console.log("------------------------------------------------");
