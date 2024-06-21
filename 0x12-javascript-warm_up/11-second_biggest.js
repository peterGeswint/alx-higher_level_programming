#!/usr/bin/node

function findSecondBiggest(args) {
  const integers = args.map(Number);
  
  if (integers.length <= 1) {
    return 0;
  }
  
  let max = -Infinity;
  let secondMax = -Infinity;
  
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] > max) {
      secondMax = max;
      max = integers[i];
    } else if (integers[i] > secondMax && integers[i] !== max) {
      secondMax = integers[i];
    }
  }
  
  return secondMax;
}

const args = process.argv.slice(2);
console.log(findSecondBiggest(args));
