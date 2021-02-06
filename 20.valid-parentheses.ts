/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start

function isValid(s: string): boolean {
  const stack = [];
  const brackets = /\(|\)|\{|\}|\[|\]/;
  const openBrackets = /\(|\{|\[/;
  const closeBrackets = /\)|\}|\]/;

  const strArray = s.split("");

  for (let index = 0; index < strArray.length; index++) {
    const char = strArray[index];
    if (!brackets.test(char)) return false;
    if (openBrackets.test(char)) stack.push(char);
    if (closeBrackets.test(char)) {
      switch (stack[stack.length - 1]) {
        case "(":
          if (char === ")") {
            stack.pop();
          } else {
            return false;
          }
          break;
        case "{":
          if (char === "}") {
            stack.pop();
          } else {
            return false;
          }
          break;
        case "[":
          if (char === "]") {
            stack.pop();
          } else {
            return false;
          }
          break;
        default:
          return false;
      }
    }
  }

  return stack.length === 0;
}
// @lc code=end
