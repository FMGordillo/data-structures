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

  /**
   * @param {any} value value to delete
   * @returns {boolean} returns true if the value is found and deleted, false otherwise
   */
  remove (value) {
    let currentHead = this.head

    if (currentHead === null) {
      return false
    }

    // if the head is the value to remove (the happiest path)
    if (currentHead.value === value) {
      if (currentHead === this.tail) {
        this.head = null
        this.tail = null
      } else {
        this.head = currentHead.next
      }
      return true
    }

    while (currentHead.next !== null && currentHead.next.value !== value) {
      currentHead = currentHead.next
    }

    if (currentHead.next !== null) {
      if (currentHead.next === this.tail) {
        this.tail = currentHead
        this.tail.next = null
      } else {
        currentHead.next = currentHead.next.next
      }
      return true
    }

    return false
  }

  * map () {
    let currentHead = this.head
    while (currentHead !== null) {
      yield currentHead.value
      currentHead = currentHead.next
    }
  }

  * mapReverse () {
    let current
    let previous

    if (this.tail !== null) {
      current = this.tail

      while (current !== this.head) {
        previous = this.head

        while (previous.next !== current) {
          previous = previous.next
        }
        yield current.value
        current = previous
      }

      yield current.value
    }
  }
}
