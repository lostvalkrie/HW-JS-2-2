"use strict";

// 1
console.log("WHILE");
let whileI = 25;
while (whileI >= 0) {
  console.log(whileI);
  whileI--;
}

console.log("DO WHILE");
let doWhileI = 25;
do {
  console.log(doWhileI);
  doWhileI--;
} while (doWhileI >= 0);

console.log("FOR");
for (let i = 25; i >= 0; i--) {
  console.log(i);
}

// 2
console.log("WHILE 2");
let whileI2 = 10;
while (whileI2 <= 50) {
  console.log(whileI2);
  whileI2 += 5;
}

console.log("DO WHILE 2");
let doWhileI2 = 10;
do {
  console.log(doWhileI2);
  doWhileI2 += 5;
} while (doWhileI2 <= 50);

console.log("FOR 2");
for (let i = 10; i <= 50; i += 5) {
  console.log(i);
}
