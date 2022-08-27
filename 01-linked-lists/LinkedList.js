import { Node } from './Node'

export default class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  /** @returns {Node} the link's head */
  getHead () {
    return this.head
  }

  /** @returns {Node} the link's tail */
  getTail () {
    let currentTail = this.tail

    while (currentTail && currentTail.next) {
      currentTail = currentTail.next
    }

    return currentTail
  }

  /**
   * @param {any} value - the value to append to the list
   * @returns {Node} the appended node
   */
  append (value) {
    const node = new Node(value)

    // if there is no head, make this the head
    if (!this.head) {
      this.head = node
      this.tail = node
    // if there is a head, append to the tail
    } else {
      this.tail.next = node
      this.tail = node
    }

    return node
  }

  /** @returns {Node} the removed node */
  pop () {
    const deletedNode = this.tail

    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      return deletedNode
    }

    let currentNode = this.head

    while (currentNode && currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null
      } else {
        currentNode = currentNode.next
      }
    }

    this.tail = currentNode

    return deletedNode
  }

  /** @returns {number} the list's size */
  size () {
    let size = 0
    let currentNode = this.head

    while (currentNode) {
      size++
      currentNode = currentNode.next
    }

    return size
  }

  /**
   * @param {any} value value to search for
   * @returns {boolean} returns true if the value is found, false otherwise
   */
  contains (value) {
    let currentHead = this.head

    while (currentHead !== null && currentHead.value !== value) {
      currentHead = currentHead.next
    }

    if (currentHead === null) {
      return false
    }

    return true
  }
}
