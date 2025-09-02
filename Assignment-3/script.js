// Q1. Count Characters
function countCharacters(S) {
  let A = 0, D = 0;
  for (let ch of S) {
    if (ch === "A") A++;
    if (ch === "D") D++;
  }
  return [A, D];
}
console.log("Answer-1:", countCharacters("AbaDd"));

// Q2. Count the Heads
function Count_Head(S) {
  let map = {};
  for (let ch of S) map[ch] = (map[ch] || 0) + 1;
  return Object.keys(map)
    .sort()
    .map(k => (map[k] > 1 ? k + map[k] : ""))
    .join("");
}
console.log("Answer-2:", Count_Head("prepbytes"));

// Q3. Count the Vowels
function Count_Vowel(S) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let ch of S) if (vowels.includes(ch)) count++;
  return count;
}
console.log("Answer-3:", Count_Vowel("Prepbytes"));

// Q4. Concatenate the Strings
function Concatenate_Strings(S1, S2) {
  return S1 + S2;
}
console.log("Answer-4:", Concatenate_Strings("Prep", "bytes"));

// Q5. Find Length
function findLength(S) {
  let len = 0;
  for (let _ of S) len++;
  return len;
}
console.log("Answer-5:", findLength("CeDqe"));

// Q6. Find the Winner
function Game_Winner(S) {
  let A = 0, D = 0;
  for (let ch of S) {
    if (ch === "A") A++;
    if (ch === "D") D++;
  }
  if (A > D) return "Aditya";
  if (D > A) return "Danish";
  return "Draw";
}
console.log("Answer-6:", Game_Winner("ADDAAADDDDD"));

// Q7. Join Strings
function joinStrings(S, P) {
  return S + P;
}
console.log("Answer-7:", joinStrings("PrepBytes", "Technologies"));

// Q8. Palindrome Check
function Plain_Check(S) {
  return S === S.split("").reverse().join("") ? "True" : "False";
}
console.log("Answer-8:", Plain_Check("naman"));

// Q9. Reverse the String
function Reverse_String(S) {
  return S.split("").reverse().join("");
}
console.log("Answer-9:", Reverse_String("I am Himanshu Sharma"));

// Q10. Match the Strings
function String_Match(S1, S2) {
  return S1 === S2 ? "YES" : "NO";
}
console.log("Answer-10:", String_Match("Prepbytes", "Prepbytes"));

// Q11. String Replace
function Replace(S, pattern, text) {
  return S.replace(pattern, text);
}
console.log("Answer-11:", Replace("Hi, I am You. Himanshu Prepbytes", "You", "Prepbytes"));

// Q12. Split the String
function Split_the_String(S) {
  return S.split(" ");
}
console.log("Answer-12:", Split_the_String("I am Himanshu Sharma"));

// Q13. Count Vowels and Consonants
function Count_Vowels(S) {
  let vowels = "aeiouAEIOU", count = 0;
  for (let ch of S) if (vowels.includes(ch)) count++;
  return count;
}
function Count_Consonants(S) {
  let vowels = "aeiouAEIOU", count = 0;
  for (let ch of S) if (/^[a-z]$/i.test(ch) && !vowels.includes(ch)) count++;
  return count;
}
console.log("Answer-13:", Count_Vowels("Prepbytes"), Count_Consonants("Prepbytes"));
