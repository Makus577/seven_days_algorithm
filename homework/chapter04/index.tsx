/**
 * 
 * 设计实现双端队列。
 * 你的实现需要支持以下操作：
 * MyCircularDeque(k)：构造函数,双端队列的大小为k。
 * insertFront()：将一个元素添加到双端队列头部。 如果操作成功返回 true。
 * insertLast()：将一个元素添加到双端队列尾部。如果操作成功返回 true。
 * deleteFront()：从双端队列头部删除一个元素。 如果操作成功返回 true。
 * deleteLast()：从双端队列尾部删除一个元素。如果操作成功返回 true。
 * getFront()：从双端队列头部获得一个元素。如果双端队列为空，返回 -1。
 * getRear()：获得双端队列的最后一个元素。 如果双端队列为空，返回 -1。
 * isEmpty()：检查双端队列是否为空。
 * isFull()：检查双端队列是否满了。
 */

/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
  this.len = k
  this.deque = []
};

/**
* Adds an item at the front of Deque. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertFront = function(value) {
  const length = this.deque.length
  if (length >= this.len) {
      return false
  }
  this.deque.push(this.deque[length -1])
  for (let i = length - 1; i > 0 ; i--) {
      this.deque[i] = this.deque[i-1]
  }
  this.deque[0] = value
  return true
};

/**
* Adds an item at the rear of Deque. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertLast = function(value) {
  const length = this.deque.length
  
  if (length >= this.len) {
      return false
  }
  this.deque.push(value)
  return true
};

/**
* Deletes an item from the front of Deque. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularDeque.prototype.deleteFront = function() {
  const length = this.deque.length
  if (length === 0) {
      return false
  }
  for (let i = 0; i < length - 1 ; i++) {
      this.deque[i] = this.deque[i+1]
  }
  this.deque.pop()
  return true
};

/**
* Deletes an item from the rear of Deque. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularDeque.prototype.deleteLast = function() {
  const length = this.deque.length
  if (length === 0) {
      return false
  }
  this.deque.pop()
  return true
};

/**
* Get the front item from the deque.
* @return {number}
*/
MyCircularDeque.prototype.getFront = function() {
  const length = this.deque.length
  if (length === 0) {
      return -1
  }
  return this.deque[0]
};

/**
* Get the last item from the deque.
* @return {number}
*/
MyCircularDeque.prototype.getRear = function() {
  const length = this.deque.length
  if (length === 0) {
      return -1
  }
  return this.deque[length-1]
};

/**
* Checks whether the circular deque is empty or not.
* @return {boolean}
*/
MyCircularDeque.prototype.isEmpty = function() {
  return this.deque.length === 0
};

/**
* Checks whether the circular deque is full or not.
* @return {boolean}
*/
MyCircularDeque.prototype.isFull = function() {
  return this.deque.length >= this.len
};
