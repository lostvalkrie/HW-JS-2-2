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

// 3
const number1 = Number(prompt("Insert first number"));
const number2 = Number(prompt("Insert second number"));
const max = Math.max(number1, number2);
const min = Math.min(number1, number2);

console.log("WHILE 3");
let whileMin = min;
let whileSummer = 0;
while (whileMin <= max) {
  whileSummer += whileMin;
  console.log(whileSummer);
  whileMin++;
}

console.log("DO WHILE 3");
let doWhileMin = min;
let doWhileSummer = 0;
do {
  doWhileSummer += doWhileMin;
  console.log(doWhileSummer);
  doWhileMin++;
} while (doWhileMin <= max);

console.log("FOR 3");
let forSummer = 0;
for (let i = min; i <= max; i++) {
  forSummer += i;
  console.log(forSummer);
}

// 4
const secretNumber = Math.floor(Math.random() * 20) + 1;
while (true) {
  const yourInput = prompt("Insert number");

  if (yourInput === null) break;

  const yourNumber = Number(yourInput);

  if (yourNumber === secretNumber) {
    alert(`You won! Number was ${secretNumber}`);
    break;
  } else if (Math.abs(secretNumber - yourNumber) <= 3) {
    console.log("close");
  } else console.log("NOT close");
}

// 5
let stepCounter = 0;
while (true) {
  const input = prompt("Enter amount of staps or 'stop'");
  if (input === null || input.toLowerCase() === "stop") {
    console.log(stepCounter);
    break;
  }
  const yourSteps = Number(input);

  if (yourSteps >= 0 && !Number.isNaN(yourSteps)) {
    stepCounter += yourSteps;
  }
}
