console.log('hello nodejs');

function sum(a, b) {
  return a + b;
}

const a = 6, b = 9;
const s = sum(a, b);
console.log(`${a} + ${b} = ${s}`);

// import * as fn from './utils/fn.js';
// const m = fn.multiply(a, b);
// console.log(`${a} * ${b} = ${m}`);
//
// const d = fn.default(b, a);
// console.log(`${b} / ${a} = ${d}`);

import divide, { pow } from './utils/fn.js';
const d = divide(b, a);
console.log(`${b} / ${a} = ${d}`);
const p = pow(2, 3);
console.log(`2^3 = ${p}`);

import cryptoRandomString from 'crypto-random-string';
const base64 = cryptoRandomString({
  length: 80,
  type: 'base64'
});
console.log(base64);