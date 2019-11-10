/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 链接：https://leetcode-cn.com/problems/move-zeroes/
 * 解题思路：
 * 初始化zero=0，再遍历数组，当值为0时，zero则指向它，当值不为0时，则与zero对应的交换，zero++
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const len = nums.length
  if (len === 0) {
    return
  }
  let zero = 0
  for (let i = 0; i < len; i++) {
    if (0 === nums[i] && nums[zero] !== 0) {
      zero = i
    } else if (nums[i] !== 0 && zero > -1) {
      [nums[i], nums[zero]] = [nums[zero], nums[i]]
      zero++
    }
  }
};


/**
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 链接：https://leetcode-cn.com/problems/plus-one/
 * 解题思路：逆序数组然后遍历加进位（carry=1），就跟平时做加法一样
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  digits.reverse()
  let i = 0
  let carry = 1
  const len = digits.length
  while (i < len) {
    digits[i] = digits[i] + carry
    if (digits[i] < 10) {
      carry = 0
      return digits.reverse()
    }
    digits[i] = digits[i] % 10;
    carry = 1
    i++
  }
  if (carry === 1) {
    digits.push(carry)
  }
  return digits.reverse()
};

/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标
 * 链接：https://leetcode-cn.com/problems/two-sum/
 * 解题思路：
 *  1. 暴力法：两次循环数组找到两和为target的值
 *  2. hash表：先循环一次数组，存入hash表中，再循环一次数组找到`target-nums[i]`是否再hash表中
 *     空间换时间, 使用ES6中的`Map`模拟hash表
 */

var twoSum = function(nums, target) {
  const len = nums.length
  const map = new Map()
  for (let i = 0; i< len; i++) {
      map.set(nums[i], i)
  }
  for (let i = 0; i< len;i++) {
      const p = target - nums[i]
      if (map.has(p) && map.get(p) !== i) {
          return [i, map.get(p)]
      }
  }
  return
};