// Q1. Find Grades
function findGrades(M) {
  switch (true) {
    case M <= 10:
      return "E";
    case M <= 20:
      return "D";
    case M <= 30:
      return "C";
    case M <= 40:
      return "B";
    case M <= 50:
      return "A";
    default:
      return "Invalid Marks";
  }
}
console.log("Q1:", findGrades(35));

// Q2. Get Value
function getValue(C) {
  switch (C.toLowerCase()) {
    case "p":
      return "PrepBytes";
    case "z":
      return "Zenith";
    case "e":
      return "Expert Coder";
    case "d":
      return "Data Structure";
    default:
      return "Invalid Input";
  }
}
console.log("Q2:", getValue("E"));

// Q3. Find maximum out of three
function Max_out_of_three(A, B, C) {
  if (A === B && B === C) return -1;
  return Math.max(A, B, C);
}
console.log("Q3:", Max_out_of_three(2, 5, 4));

// Q4. Find Second Smallest
function findSndSmallest(X, Y, Z) {
  let arr = [X, Y, Z];
  arr.sort((a, b) => a - b);
  return arr[1];
}
console.log("Q4:", findSndSmallest(2, 9, 23));

// Q5. Triangle Check
function Triangle_Check(A, B, C) {
  if (A < 90 && B < 90 && C < 90) return "acute";
  if (A > 90 || B > 90 || C > 90) return "obtuse";
  return "right";
}
console.log("Q5:", Triangle_Check(60, 100, 20));
