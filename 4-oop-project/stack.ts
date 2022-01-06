/**
 * 어떤 API를 가지고 있을까? 규격을 정하자.
 * 사용자는 인터페이스만 사용하면 된다.
 */
interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  // readonly를 통해 불변성을 유지하자.
  // 사용자에게 데이터를 받아서 한 단계 더 감싸는 무언가를 만든다면
  // 불변성을 유지하는 것이 좋다.
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  get size() {
    return this._size;
  }

  push(value: string) {
    const node: StackNode = {
      value,
      next: this.head,
    };
    this.head = node;
    this._size++;
    console.log('PUSH!');
    console.log(this.head, this.size);
  }

  pop(): string {
    if (this.head == null) {
      throw Error('스택이 비었습니다.');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    console.log('POP!');
    console.log(this.head, this.size);
    return node.value;
  }
}

const stackImpl = new StackImpl();
stackImpl.push('vintz');
stackImpl.push('teo');
stackImpl.push('react');
stackImpl.pop();
stackImpl.pop();
stackImpl.pop();
// stackImpl.pop();
