# Stacks and Queues

## Challenge

* [stack-and-queue.js](https://github.com/En-ZUH/data-structures-and-algorithms-401/blob/main/javascript/Data%20Structure-401/stack%20and%20queue_ch10/stack-and-queue.js)
* [stack-and-queue.test.js](https://github.com/En-ZUH/data-structures-and-algorithms-401/blob/main/javascript/Data%20Structure-401/stack%20and%20queue_ch10/_tests_/stack-and-queue.test.js)

 In this challenge we will write the code for both queue and stack data structures.

- `Stack`: is just a data structure in which last element added is the first one will be removed.

- `Queue`: is a data structure in which first element is the first out.

## Approach & Efficiency

- Space : O(1)
- Time : O(n)

## API

### Stack 

- `push()`: look at the first available index and add the element there.
- `pop()`: remove from the top of the stack.
- `peek()`: shows which element would be removed next, but doesnot actually remove it.
- `size()`: it will look at the size variable.
- `isEmpty()`: return whether or not there is an elements in the the stack.

###  Queue

- `enqueue()`: add element to the queue.
- `dequeue()`: it will remove the first element enqueued to the queue.
- `peek()`: return the first added without removing it.
- `size()`: return the size of the queue.
- `isEmpty()`: checks whether if the the queue is empty or not.

![img](https://images.saymedia-content.com/.image/t_share/MTc0NDc5MjM2NzY0MDE4MzEw/an-example-of-creating-and-using-stack-and-queue-in-c.png)
