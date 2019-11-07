/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 链接：https://leetcode-cn.com/problems/rotate-array/
 * 解题思路：
 * 1. 笨办法：循环k，每次向右移动一位
 * 2. 把最后`k%len`项截取到最前面
 * 3. 旋转数组：先逆序一遍数组，分别逆序`0~k%len-1`和`k%len~len`即可
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
const rotate1 = (nums: number[], k: number) => {
  const len = nums.length
  if (len === 0) {
    return len
  }
  for (let i = 0; i < k; i++) {
    const last = nums[len - 1]
    for (let j = len - 1; j > 0; j--) {
      nums[j] = nums[j - 1]
    }
    nums[0] = last
  }
}

const rotate2 = (nums: number[], k: number) => {
  const len = nums.length
  if (k === 0) {
    return
  }
  const reversePoint = len - k % len
  nums = nums.slice(reversePoint).concat(nums.slice(0, reversePoint))
}

const rotate3 = (nums: number[], k: number) => {
  const len = nums.length
  if (len === 0) {
    return
  }
  const n = k % len
  nums.reverse() // 直接逆序，并改变了nums
  reverse(nums, 0, n - 1)
  reverse(nums, n, len - 1)
  function reverse(arr: number[], start: number, end: number) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
    }
  }
}