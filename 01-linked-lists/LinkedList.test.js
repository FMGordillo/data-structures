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

  it('should return the node at the given index', () => {})
})
