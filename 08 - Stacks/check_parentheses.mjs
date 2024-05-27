import { Stack } from "./stack_linkedList.mjs";

const expression = "([(()()()a+b)]{})";

function checkParentheses(expression) {
  if (!expression.length) return true;
  const stack = new Stack();

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      const stackTop = stack.pop();
      if (
        (char === ")" && stackTop !== "(") ||
        (char === "]" && stackTop !== "[") ||
        (char === "}" && stackTop !== "{")
      ) {
        return false;
      }
    }
  }
  return true;
}

console.log(checkParentheses(expression));
