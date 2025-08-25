// Questions-1
let a = 11,
  b = 15;
sum = a + b;
console.log(sum);

// Questions-2**
(a = 13), (b = 20);
console.log(a < 10 && a > b);

// Questions-3
(a = 7), (b = 10);
//1.condition
console.log(a / 10 >= 1 && b / 10 >= 1);

//2.condition
console.log(a / 10 < 1 && b / 10 < 1);

//3.condition
console.log(a / 10 >= 1 || b / 10 >= 1);

// Questions-4**
let num = 2456;
let firstDigit = parseInt(num / 1000);
console.log(firstDigit);

// Questions-5
console.log(num % 10);

// Questions-6
(a = 14), (b = 5);
console.log(a % b);

// Questions-7
(a = 5), (b = 6);
console.log(a * b);

// Questions-8
let sub1 = 87,
  sub2 = 98,
  sub3 = 67;
totel = sub1 + sub2 + sub3;
avg = totel / 3;
console.log(totel, avg);
