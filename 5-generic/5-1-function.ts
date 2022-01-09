namespace GenericFunction {
  // 제네릭을 배우면 API 문서를 읽거나 오픈소스 프로젝트를 볼 때 막힘없이 이해할 수 있다.
  // 또한 제네릭스를 통해 재사용성을 높일 수 있다.

  // querySelector와 같은 api를 사용할 때, 동적 타입 언어인 자바스크립트는
  // 요소 또는 null이 리턴될 수 있다. 따라서 해당 아이템의 유효성을 검사하는,
  // null 체크를 하는 함수를 구현하는 것을 예로 들어보자.

  // 이렇게 타입을 한정해서 구현하면 타입마다 함수를 만들어줘야 할까?
  // 매우 비효율적이다. 💩
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error(`유효하지 않은 숫자값입니다: ${arg}`);
    }
    return arg;
  }

  // any로 설정할 경우 타입이 보장되지 않는다.(타입추론이 불가능하다.)
  // 타입에 대한 정보가 없기 때문에 안전한 타입이 아니다. 💩
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error(`유효하지 않은 값입니다: ${arg}`);
    }
    return arg;
  }
  const result = checkNotNullAnyBad('ok');
  console.log(result);

  // 제네릭을 통해 유연하고 타입까지 보장되는 함수를 구현할 수 있다.
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error(`유효하지 않은 값입니다: ${arg}`);
    }
    return arg;
  }
  const generic = checkNotNull('abc');
  const bool: boolean = checkNotNull(true);
}
