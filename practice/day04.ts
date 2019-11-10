
/**
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 * 链接：https://leetcode-cn.com/problems/merge-sorted-array/
 * 解题思路：先合并成一个数组，再对数组排序
 * @param nums1 
 * @param m 
 * @param nums2 
 * @param n 
 */
const merge = function (nums1: number[], m: number, nums2: number[], n: number) {

  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i]
  }
  // 冒泡排序
  const len = m + n
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums1[i] > nums1[j]) {
        // 交换
        [nums1[i], nums1[j]] = [nums1[j], nums1[i]]
      }
    }
  }
};