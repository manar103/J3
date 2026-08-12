/*
  Number Challenge
*/
let x = "100.56456";

console.log(isNaN(x)) // false  لي في ال string رجعلي => false
console.log("لأن الـ String يحتوي على رقم صحيح يمكن تحويله إلى Number، لذلك isNaN() ترجع false.");
// round()  &  toFixed()  ??????? 
//-----------------------
let a = 100;
let b = 2_00.5;
let c = 1e2; 
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.floor(Math.min(a, b, c, d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a + d - d, 2)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));
console.log(Number.parseInt(d));

// Use Variables b + d To Get This Valus
console.log((b / d).toFixed(2)); // 66.67 => String
console.log(Math.round(b / d)); // 67 => Number

let name = "Bahaa Tarek Shaheen";

// Include This Method In Your Solution [slice, charAt]
console.log(name.slice(5, 10)); // Tarek

// 8 H
console.log("H".repeat(8)); // HHHHHHHH

// Return Array
console.log([name.split(" ")[2]]); // ["Shahien"]
//-----------------------------------------------------------------------------------------
