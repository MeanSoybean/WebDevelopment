export function multiply(a, b) {
  return a * b;
}

export function pow(x, n) {
  let s = 1;
  for (let i = 1; i <= n; i++) {
    s *= x;
  }
  return s;
}

export default function (a, b) {
  return a / b;
}