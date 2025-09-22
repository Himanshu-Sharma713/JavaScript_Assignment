console.log("===========  Question : 1  ===========");
// Q1. Create a Function
function createSetter(obj) {
  obj.setter = function () {
    console.log(this.name);
  };
  return obj;
}
let obj1 = createSetter({ name: "Utkarsh" });
console.log("Answer-1:");
obj1.setter();

console.log("===========  Question : 2  ===========");
// Q2. Delete a Parameter
function deleteRollNo(obj) {
  if ("rollno" in obj) {
    delete obj.rollno;
    return true;
  }
  return false;
}
console.log("Answer-2:", deleteRollNo({ name: "Utkarsh", rollno: 129 }));

console.log("===========  Question : 3  ===========");
// Q3. Dream Package
function isDreamPackage(obj) {
  return obj.salary > 500000 ? "Dream" : "NotDream";
}
console.log("Answer-3:", isDreamPackage({ salary: 100000 }));

console.log("===========  Question : 4  ===========");
// Q4. Object has Parameters?
function hasProperties(obj) {
  return Object.keys(obj).length === 0 ? "false" : "true";
}
console.log("Answer-4:", hasProperties({ a: 1 }));

console.log("===========  Question : 5  ===========");
// Q5. Merge Objects
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
console.log(
  "Answer-5:",
  mergeObjects({ name: "Utkarsh", id: 129 }, { state: "Haryana", code: 121009 })
);

console.log("===========  Question : 6  ===========");
// Q6. Object Multiplier
function objectMultiplier(obj, N) {
  obj.id *= N;
  obj.houseno *= N;
  return obj;
}
console.log("Answer-6:", objectMultiplier({ id: 12, houseno: 146 }, 2));

console.log("===========  Question : 7  ===========");
// Q7. Sum of Object Members
function Check(obj) {
  return obj.p1 + obj.p2 + obj.p3;
}
console.log("Answer-7:", Check({ p1: 1, p2: 2, p3: 3 }));

console.log("===========  Question : 8  ===========");
// Q8. Compare Objects
function compareObjects(obj, new_name, new_id) {
  return obj.name === new_name && obj.id === new_id ? "true" : "false";
}
console.log(
  "Answer-8:",
  compareObjects({ name: "Utkarsh", id: 2 }, "Prepbytes", 3)
);
