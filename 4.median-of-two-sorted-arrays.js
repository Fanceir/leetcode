/*
 * @lc app=leetcode.cn id=4 lang=javascript
 * @lcpr version=30204
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let len1 = nums1.length,
    len2 = nums2.length;

  // 确保 nums1 是较短的数组，这样可以优化二分查找
  if (len1 > len2) {
    [len1, len2] = [len2, len1];
    [nums1, nums2] = [nums2, nums1];
  }
  let left = 0,
    right = len1;
  while (left <= right) {
    let i = Math.floor((left + right + 1) / 2);
    let j = Math.floor((len1 + len2 + 1) / 2) - i;
    let maxLeft1 = i === 0 ? -Infinity : nums1[i - 1];
    let minRight1 = i === len1 ? Infinity : nums1[i];
    let maxLeft2 = j === 0 ? -Infinity : nums2[j - 1];
    let minRight2 = j === len2 ? Infinity : nums2[j];
    if (maxLeft1 <= minRight2 && minRight1 >= maxLeft2) {
      if ((len1 + len2) % 2 === 1) {
        // 奇数个元素，返回左半部分的最大值
        return Math.max(maxLeft1, maxLeft2);
      } else {
        // 偶数个元素，返回中间两个数的平均值
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        );
      }
    } else if (maxLeft1 > minRight2) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }
};
// @lc code=end

/*
// @lcpr case=start
// [1,3]\n[2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n[3,4]\n
// @lcpr case=end

 */
