namespace Assertion {
  /**
   * Type Assertions 💩 -> 타입 강요하기
   * 사용이 불가피한 경우에만 사용하자.
   */

  // 예시) 동적타입인 자바스크립트와 연동할 때
  function jsStrFunc(): any {
    return 'hello~!';
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);
  console.log(result.length);

  // const wrong: any = 5;
  // console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  // 무조건 옵션이 있어!
  numbers.push(2);
  const button = document.querySelector('class')!;
}
