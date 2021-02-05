/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
// - Initialize a stack S.
// - Process each bracket of the expression one at a time.
// - If we encounter an opening bracket, we simply push it onto the stack. This means we will process it later, let us simply move onto the sub-expression ahead.
// - If we encounter a closing bracket, then we check the element on top of the stack. If the element at the top of the stack is an opening bracket of the same type, then we pop it off the stack and continue processing. Else, this implies an invalid expression.
// - In the end, if we are left with a stack still having elements, then this implies an invalid expression.
function isValid(s: string): boolean {
    const stack = []
    const brackets = /\(|\)|\{|\}|\[|\]/
    const openBrackets = /\(|\{|\[/
    const closeBrackets = /\)|\}|\]/

    const strArray = s.split('')

    for (let index = 0; index < strArray.length; index++) {
        const char = strArray[index]
        if(!brackets.test(char)) {
            console.log('no match')
            return false
        }
        if(openBrackets.test(char)) stack.push(char.charCodeAt(0))
        if(closeBrackets.test(char)) {
            if(stack[stack.length - 1] !== char.charCodeAt(0) - 1)  return false
            stack.pop()
        }
        console.log(stack, index)
    }
    console.log(stack)

    return stack.length === 0
};
// @lc code=end

