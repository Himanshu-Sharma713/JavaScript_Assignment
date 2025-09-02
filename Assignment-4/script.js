// Q1. Find the Product
function Find_Prod(arr) {
  return arr.reduce((prod, num) => prod * num, 1);
}
console.log("Answer-1:", Find_Prod([1, 2, 3, 4, 5]));

// Q2. Find the Sum
function Find_Sum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log("Answer-2:", Find_Sum([1, 2, 3, 4, 5]));

// Q3. Count Occurrences
function findCount(arr, K) {
  return arr.filter(x => x === K).length;
}
console.log("Answer-3:", findCount([3, 3, 1, 2], 3));

// Q4. Even Odd
function findEvenOdd(arr) {
  let even = 0, odd = 0;
  for (let num of arr) {
    if (num % 2 === 0) even += num;
    else odd += num;
  }
  return [even, odd];
}
console.log("Answer-4:", findEvenOdd([1, 2, 3, 4, 5, 6, 7]));

// Q5. Find whether the number is present
function Find_Num(arr, M) {
  return arr.includes(M) ? "YES" : "NO";
}
console.log("Answer-5:", Find_Num([1, 2, 3, 4, 5], 2));

// Q6. Higher Age
function highAge(arr) {
  return arr.filter(age => age >= 18);
}
console.log("Answer-6:", highAge([11, 23, 3, 45, 72, 68]));

// Q7. Increment the Array Elements
function Inc_Arr(arr) {
  return arr.map(x => x + 1);
}
console.log("Answer-7:", Inc_Arr([1, 2, 3, 4, 5]));

// Q8. Pass or Fail
function isAllPass(arr) {
  return arr.every(marks => marks >= 32) ? "YES" : "NO";
}
console.log("Answer-8:", isAllPass([13, 89, 45, 98, 67, 45, 54]));

// Q9. Unique Color Shirt
function uniqueShirts(arr) {
  let freq = {};
  for (let color of arr) freq[color] = (freq[color] || 0) + 1;
  return Object.values(freq).filter(c => c === 1).length;
}
console.log("Answer-9:", uniqueShirts([3, 2, 4, 1, 2, 3]));

// Q10. Min and Max
function arrayMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
console.log("Answer-10:", arrayMinMax([66, 33, 11, 44, 66, 22, 77]));
