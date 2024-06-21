#!/usr/bin/node

function secondBiggest (args) {
  if (args.length <= 1) {
    return 0;
  }
  
  let max = -Infinity;
  let secondMax = -Infinity;
  
  for (const num of args) {
     if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }
  
  return secondMax;
}

const args = process.argv.slice(2).map(Number);

console.log(secondBiggest(args));
