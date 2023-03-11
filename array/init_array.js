/**
 * Constructor vs Factory
 */

// Constructor pattern
const c1 = new Array(5);
const c2 = new Array(1, 2, 3, 4, 5);
console.log(c1, c1.length);
console.log(c2, c2.length);

// Factory Pattern
const f1 = Array(5);
const f2 = Array(1, 2, 3, 4, 5);
console.log(f1, f1.length);
console.log(f2, f2.length);

console.log(c1.__proto__.constructor);
console.log(f1.__proto__.constructor);
