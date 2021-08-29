'use strict';
const a = 1;
const b = 5;
const c = 6;  // stands for x**2 - 6*x + 9 = 0
let discriminant=b * b - 4 * a * c;
let solutionA = 0;
let solutionB = 0;
solutionA+=(-b + Math.sqrt(discriminant))/(2*a);
solutionB+=(-b - Math.sqrt(discriminant))/(2*a);
console.log(solutionA, solutionB);
