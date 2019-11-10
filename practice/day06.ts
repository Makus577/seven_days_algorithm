/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 链接：https://leetcode-cn.com/problems/trapping-rain-water/
 * 解题思路：
 *   使用栈，如果遇到比栈顶小的则进栈，如果遇到大的，那栈顶出，计算此刻与新栈顶的面积
 */
const trap = function (height: number[]) {
  const len = height.length
  const stack = []
  let area = 0
  for (let i = 0; i < len; i++) {
    while (stack.length !== 0 && height[stack[stack.length - 1]] < height[i]) {
      const current = height[stack[stack.length - 1]]
      stack.pop()
      if (stack.length === 0) {
        break
      }
      area += (Math.min(height[i], height[stack[stack.length - 1]]) - current)
        * (i - stack[stack.length - 1] - 1)
    }
    stack.push(i)
  }
  return area
};