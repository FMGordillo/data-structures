import { Node } from './Node'

describe('01: Node test', () => {
  it('should create a node', () => {
    const node = new Node(1)
    expect(node).toBeDefined()
    expect(node).toEqual({
      next: null,
      value: 1
    })
  })

  it('should create a node with a next node', () => {
    const node = new Node(1, 2)
    expect(node).toEqual({
      next: 2,
      value: 1
    })
  })

  it('should parse to string the current value', () => {
    const node = new Node(1)
    expect(node.toString()).toStrictEqual('1')
  })

  it('should parse to string the current value with a callback', () => {
    const node = new Node(1)
    expect(node.toString((value) => `Current value: ${value}`)).toStrictEqual('Current value: 1')
  })
})
