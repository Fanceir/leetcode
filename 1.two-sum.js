/*
 * @lc app=leetcode.cn id=1 lang=javascript
 * @lcpr version=30204
 *
 * [1] 两数之和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            return [map.get(target-nums[i]),i];
        }
        map.set(nums[i],i);
    }
    return [-1,-1];
};
// @lc code=end

/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n6\n
// @lcpr case=end

 */
