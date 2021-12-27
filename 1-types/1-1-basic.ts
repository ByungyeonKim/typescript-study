{
  // 로컬 스코프로 작성
  // var는 없다고 생각하자. 💩
  // 호이스팅, 블록 스코프 미지원 등 문제가 많다.

  // 브라우저 호환성 문제를 봐도, 타입스크립트는 타켓 버전을
  // 선택할 수 있기 때문에 호환성 문제는 걱정할 필요가 없다.
  // ES6 let
  let name = 'Vintz';
  name = '개발전용 차선';
  // ES6 const
  // 한번 선언하고 할당한 다음에는 값을 바꿀 수 없다.
  // '상수' 값!
  const age = '27';

  /**
   * JavaScript
   * 원시타입(Primitive): number, string, boolean, bigint, symbol, null, undefined
   * 객체(Object): function, array...조금 더 복잡한 타입
   */

  /**
   * TypeScript - 조금 더 엄격한 타입 정의
   * 한번 정의된 타입에는 다른 타입의 데이터를 담을 수 없다.
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined : 값이 있는지 없는지 결정된 게 없음
  let name1: undefined; // 💩
  let age2: number | undefined; // optional 타입일 때 이런식으로 작성한다.
  // ⭐️ 위의 방법이 더 보편적으로 사용 됨.
  // 데이터 타입이 있거나, 결정되지 않았거나.
  age2 = 1;
  age2 = undefined;
  function find(): number | undefined {
    return undefined;
  }
  // null : 좀 더 명확하게 값이 없다는 것을 표시
  let person: null; // 💩
  let person2: string | null; // 데이터가 있거나 없을 수도 있을 때 작성한다.

  /**
   * unknown 💩 가능하면 쓰지 말자.
   * 그렇다면 왜 있을까? 타입이 없는 JS와 연동해서 쓸 수 있기 때문에
   * JS 라이브러리를 이용하는 경우, JS에서 리턴하는 타입을 모를 수도 있다.
   * 하지만 가능하면 구체적으로 타입을 지정해서 쓰는 것이 좋다.
   */
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 이건 더 💩 이다.
  // 가능하면 정말정말 쓰지말자.
  let anything: any = 0;
  anything = 'hello';
  // void : 아무것도 리턴하지 않을 때, 텅텅 비었다는 것과 비슷함.
  // 함수에서 아무런 것도 리턴하지 않음. void의 경우 생략도 가능
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never : 예상치 못한, 핸들링 할 수 없는 그런 에러가 발생했을 때 호출하는 함수에 쓰임
  function throwError(message: string): never {
    // message -> server (log)
    // 에러를 던져서 앱을 죽게 만든다.
    // throw new Error(message);
    // 절대로 리턴을 할 수 없는 경우에 never를 쓴다.
    while (true) {}
  }
  let neverEnding: never; // 💩

  // object : 원시타입을 제외한 모든 object 타입을 할당 할 수 있다.
  // 이렇게 광범위하게 추상적으로 담을 수 있는 타입은 사용하지 않는 것이 좋다.
  // 가능하면 object도 어떤 타입인지를 명시하자.
  let obj: object = [1, 2, 3]; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'Vintz' });
  acceptSomeObject({ animal: 'dog' });
}
