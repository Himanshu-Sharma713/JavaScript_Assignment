// Q1. Find Grades
function findGrades(Marks) {
  switch (true) {
    case Marks <= 10:
      return "E";
    case Marks <= 20:
      return "D";
    case Marks <= 30:
      return "C";
    case Marks <= 40:
      return "B";
    case Marks <= 50:
      return "A";
    default:
      return "Invalid Marks";
  }
}
console.log("Answer-1: ", findGrades(35)); // Example

// Q2. Get Value
function getValue(value) {
  switch (value.toLowerCase()) {
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
console.log("Answer-2: ", getValue("E"));

// Q3. Find maximum out of three
function Max_out_of_three(A, B, C) {
  if (A === B && B === C) return -1;
  return Math.max(A, B, C);
}
console.log("Answer-3: ", Max_out_of_three(2, 5, 4));

// Q4. Find Second Smallest
function findSndSmallest(X, Y, Z) {
  if (X < Y && X < Z) {
    X = Number.MAX_VALUE;
  } else if (Y < X && Y < Z) {
    Y = Number.MAX_VALUE;
  } else {
    Z = Number.MAX_VALUE;
  }

  if (X < Y && X < Z) {
    return X;
  } else if (Y < X && Y < Z) {
    return Y;
  } else {
    return Z;
  }
}
console.log("Answer-4: ", findSndSmallest(2, 9, 23));

// Q5. Check whether the triangle is Acute or Obtuse
function Triangle_Check(A, B, C) {
  if (A < 90 && B < 90 && C < 90) {
    return "acute";
  } else if (A > 90 || B > 90 || C > 90) {
    return "obtuse";
  } else {
    return "right";
  }
}

console.log("Answer-5: ", Triangle_Check(60, 100, 20));
