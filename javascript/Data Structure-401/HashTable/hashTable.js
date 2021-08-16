class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
  value(key) {
    let value;
    let current = this.head;
    while (current) {
      if (`${key}` in current.value) {
        value = current.value;
        break;
      }
      current = current.next;
    }
    return value;
  }

  includes(key) {
    let current = this.head;
    let check = false;
    while (current) {
      if (`${key}` in current.value) {
        check = true;
      }
      current = current.next;
    }
    return check;
  }

}

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;

    hash = key.split('').reduce((result, n) => {
      return result + n.charCodeAt(0);
    }, 0) * 599 % this.size;

    return hash;
  }

  add(key, value) {
    let hash = this.hash(key);
    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();
    }
    let keyValuePair = { [key]: value };
    this.table[hash].add(keyValuePair);
  }

  get(key) {

    const index = this.hash(key);
    const search = this.table[index];

    if (!search) return null;
    return search.values(key);

  }

  getOne(key) {

    const index = this.hash(key);
    const search = this.table[index];
    if (!search) return null;
    return search.value(key);

  }


  contains(key) {
    const index = this.hash(key);
    const search = this.table[index];
    if (!search) return false;
    return search.includes(key);

  }
}

module.exports = { HashTable };