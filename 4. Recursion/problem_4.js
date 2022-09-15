function factorial(num) {
  if (num < 0) return 0;
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

let res = factorial(5);
console.log(res);
