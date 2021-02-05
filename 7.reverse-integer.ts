/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
    const hasMinus = x < 0

    const strArray = String(Math.abs(x)).split('')
    const reverse  = strArray.reverse()
    const reverseNum = Number(reverse.join(''))
    if(reverseNum >= Math.pow(2,31) - 1 || reverseNum <= -Math.pow(2, 31)) return 0

    return (hasMinus ? -1 : 1) * reverseNum
};
// @lc code=end

