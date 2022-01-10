namespace GenericClass {
  // 인터페이스도 제네릭이 가능하다.
  // 제네릭을 통해 타입 결정을 사용자에게 위임한다.
  interface Either<L, R> {
    left: () => L;
    rigth: () => R;
  }

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {}

    left(): L {
      return this.leftValue;
    }

    rigth(): R {
      return this.rightValue;
    }
  }

  const either = new SimpleEither(0, '오른쪽');
  console.log(either.left());
  console.log(either.rigth());
}
