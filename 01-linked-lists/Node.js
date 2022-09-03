export class Node {
  /**
   * @param {any} value
   * @param {Node | null} [next = null]
   */
  constructor (value, next = null) {
    this.value = value
    this.next = next
  }

  /**
   * @param {(value: any) => string} callback - callback to parse the value
   * @return {string}
   */
  toString (callback) {
    return callback ? callback(this.value) : `${this.value}`
  }
}
