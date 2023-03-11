const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const times = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

const functions = [sum, sub, times, div, mod];
const num1 = 10,
  num2 = 20;

for (let i = 0; i < functions.length; i++) {
  const result = functions[i](num1, num2);
  console.log(`[${functions[i].name}] Result = ${result}`);
}

// Array of Array - Multi Dimensional Array
const pointTable = [
  [0, 0],
  [3, 5],
  [5, 7],
  [10, 23],
];

// One Dimensional Traverse
for (let i = 0; i < pointTable.length; i++)
  console.log(`Point ${i} - x=${pointTable[i][0]} and y=${pointTable[i][1]}`);

// Two Dimensional Traverse
const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    console.log(numbers[i][j]);
  }
}

// Matrix
const matrixA = [
  [1, 3],
  [1, 0],
  [1, 2],
];
const matrixB = [
  [0, 0],
  [7, 5],
  [2, 1],
];

const matrixSum = (matrixA, matrixB) => {
  const result = [];
  for (let i = 0; i < matrixA.length; i++) {
    const row = [];
    for (let j = 0; j < matrixA[i].length; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
  }
};
