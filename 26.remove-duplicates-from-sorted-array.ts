/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    if(!nums.length) return 0;

    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if(nums[i] !== nums[j] ) {
            i++
            nums[i] = nums[j]
        }
    }

    return i + 1

};
// @lc code=end

