function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

const result1 = add(5, 10); // Correct
const result2 = add(5, '10' as any); // Suppress error, but still a runtime risk

let num1:number = 5;
let num2:any = '10';

if (isNumber(num2)) {
  const result3 = add(num1, num2);
  console.log("result3", result3);
} else {
  console.log('Invalid input. Arguments must be numbers.');
}
console.log(result1); // Output: 15
console.log(result2); //Output: 15; but runtime risk remains.