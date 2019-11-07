/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * 解题思路：已知数组是排序好的，以首项为基准，遍历数组找到不同的项，把该项放到基准后面，基准往后移一位
 */

/**
 * @param { number[] } nums
 * @return { number }
 */
const removeDuplicates = (nums: number[]) => {
  const len = nums.length
  if (len === 0 || len === 1) {
    return len
  }
  let number = 0
  for (let i = 1; i < len; i++) {
    if (nums[i] !== nums[number]) {
      nums[++number] = nums[i]
    }
  }
  return number + 1
}

