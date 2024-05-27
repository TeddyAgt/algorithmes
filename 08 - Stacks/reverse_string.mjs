import { Stack } from "./stack_linkedList.mjs";

function reverseString(str) {
  if (str.length < 2) return str;
  const stack = new Stack();
  let result = "";

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  while (!stack.isEmpty()) {
    result += stack.pop();
  }

  return result;
}

function isPalindrom(str) {
  return reverseString(str) === str;
}

console.log(reverseString("Cosmo"));
console.log(isPalindrom("tintin"));
console.log(isPalindrom("kayak"));
