{
  // JavaScript 💩
  // 함수가 복잡할 경우, 어떤 값을 리턴할지 유추하기가 어려움
  // 다른 타입을 인자로 전달할 경우, 내가 원했던 동작이 안나올 수도 있다.
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  // 내부 코드가 많을 경우, 아래 리턴값까지 스크롤하여 리턴값을 확인해야 한다.
  function jsFetchNum(id) {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript ✨
  // 정적 타입을 정의한다는 것은 안정적인 프로그래밍, 좀 더 나은 문서화 효과를 볼 수 있다.
  // 또한, 함수의 역할을 좀 더 직관적으로 알 수 있다.
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // 자바스크립트의 최신문법 역시 타입스크립트에서 사용이 가능하다.
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // undefined
  }

  printName('Steve', 'Jobs');
  printName('Vintz');
  printName('Vintz', undefined);

  // Default parameter
  function printMessage(message: string = 'Hello World~') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  // 정해지지 않은 수의 매개변수를 배열로 받을 수 있다.
  function addNumbers(...nums: number[]): number {
    return nums.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2, 3, 4, 5));
  console.log(addNumbers(12, 25, 31, 42, 55));
}
