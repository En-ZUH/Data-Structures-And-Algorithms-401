'use strict';

const Node = require('./Node');
const LinkedListErrors = require('./errors/LinkedList');

let linkedListErrors = new LinkedListErrors();

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	checkInputs(value) {
		if (value === undefined || value === Infinity) {
			throw LinkedListErrors.notDefinedInput(
				`${value} not valid input`
			);
		}
	}

	insert(value) {
		this.checkInputs(value);
		let node = new Node(value);
		if (!this.head) {
			this.head = node;
			this.length++;
		}
		else {
			let currentNode = this.head;
			while (currentNode.next) {
				currentNode = currentNode.next;
			}
			currentNode.next = node;
			this.length++;
		}
	}
}
