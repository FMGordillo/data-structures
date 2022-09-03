import LinkedList from './LinkedList'

/**
 *
 * @param {number} length Default 1
 * @returns {LinkedList}
 */
function generateLinkedList (length = 1) {
  const linkedList = new LinkedList()
  if (length <= 0) {
    return linkedList
  }

  for (let i = 1; i <= length; i++) {
    linkedList.append(i)
  }
  return linkedList
}

describe('01: Linked Lists', () => {
  it('should create a linked list', () => {
    const linkedList = generateLinkedList()
    expect(linkedList).toBeDefined()
  })

  it('should append a node to the linked list', () => {
    const linkedList = generateLinkedList(2)
    const result = linkedList.append(3)
    expect(result).toEqual({
      next: null,
      value: 3
    })
  })

  it('should remove a node from the linked list', () => {
    const linkedList = generateLinkedList(3)

    expect(linkedList.tail.value).toBe(3)
    linkedList.pop()
    expect(linkedList.tail.value).toBe(2)
    linkedList.pop()
    expect(linkedList.tail.value).toBe(1)
    linkedList.pop()
    expect(linkedList.head).toBe(null)
    expect(linkedList.tail).toBe(null)
    linkedList.pop()
    expect(linkedList.head).toBe(null)
    expect(linkedList.tail).toBe(null)
  })

  it('should return the size of the linked list', () => {
    const linkedList = generateLinkedList(0)
    expect(linkedList.size()).toBe(0)
    linkedList.append(1)
    expect(linkedList.size()).toBe(1)
    linkedList.append(2)
    expect(linkedList.size()).toBe(2)
    linkedList.append(3)
    expect(linkedList.size()).toBe(3)
  })

  it('should return the head of the linked list', () => {
    const linkedList = generateLinkedList(0)
    expect(linkedList.getHead()).toBe(null)
    linkedList.append(1)
    expect(linkedList.getHead()).toEqual({
      next: null,
      value: 1
    })
    linkedList.append(2)
    expect(linkedList.getHead()).toEqual({
      next: {
        next: null,
        value: 2
      },
      value: 1
    })
  })

  it('should return the tail of the linked list', () => {
    const linkedList = generateLinkedList(0)
    expect(linkedList.getTail()).toBe(null)
    linkedList.append(1)
    expect(linkedList.getTail()).toEqual({
      next: null,
      value: 1
    })
    linkedList.append(2)
    expect(linkedList.getTail()).toEqual({
      next: null,
      value: 2
    })
  })

  it('should return false if searched value does not exist', () => {
    const linkedList = generateLinkedList(4)
    const foundNode = linkedList.contains(5)
    expect(foundNode).toBe(false)
  })

  it('should return true if searched value exists', () => {
    const linkedList = generateLinkedList(4)
    const foundNode2 = linkedList.contains(2)
    const foundNode4 = linkedList.contains(4)
    const foundNode5 = linkedList.contains(5)
    expect(foundNode2).toBe(true)
    expect(foundNode4).toBe(true)
    expect(foundNode5).toBe(false)
  })

  it('should delete a node from the linked list', () => {
    const linkedList = generateLinkedList(4)

    const isNodeDeleted = linkedList.remove(2)
    expect(isNodeDeleted).toBe(true)

    const isNullNodeDeleted = linkedList.remove(null)
    expect(isNullNodeDeleted).toBe(false)

    const isOutOfBoundsNodeDeleted = linkedList.remove(5)
    expect(isOutOfBoundsNodeDeleted).toBe(false)

    const isHeadNodeDeleted = linkedList.remove(1)
    expect(isHeadNodeDeleted).toBe(true)
    expect(linkedList.head.value).toBe(3)

    const sameValueLinkedList = new LinkedList()
    sameValueLinkedList.append(1)
    sameValueLinkedList.append(1)
    const isRemoved = sameValueLinkedList.remove(1)
    expect(isRemoved).toBe(true)
    expect(sameValueLinkedList.tail.next).toBe(null)
    expect(sameValueLinkedList.tail.value).toBe(1)
  })

  it('should return false if linked list does not have value', () => {
    const linkedList = generateLinkedList()
    linkedList.remove(1)
    const isRemoved = linkedList.remove(1)
    expect(isRemoved).toBe(false)
  })

  it('should be iterable', () => {
    const linkedList = generateLinkedList(5)
    const values = []

    for (const value of linkedList.map()) {
      values.push(value)
    }

    expect(values).toEqual([1, 2, 3, 4, 5])
  })

  it('should be iterable on reverse', () => {
    const linkedList = generateLinkedList(5)
    const values = []

    for (const value of linkedList.mapReverse()) {
      values.push(value)
    }

    expect(values).toEqual([5, 4, 3, 2, 1])
  })
})
