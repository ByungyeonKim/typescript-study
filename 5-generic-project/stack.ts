// 문자열 타입만 받을 수 있는 스택 클래스를 어떤 타입이든 받을 수 있는
// 효율적인 자료구조로 만들어보자.

interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: T) {
    if (this.size === this.capacity) {
      throw new Error('스택이 가득 찼습니다.');
    }
    // 타입 추론이 가능하다.
    const node = {
      value,
      next: this.head,
    };
    this.head = node;
    this._size++;
  }

  pop(): T {
    if (this.head == null) {
      throw Error('스택이 비었습니다.');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl<number>(3);

stack.push(123);
stack.push(456);
stack.push(789);

while (stack.size !== 0) {
  console.log(stack.pop());
}
