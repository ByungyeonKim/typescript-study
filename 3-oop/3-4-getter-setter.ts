namespace GetterSetter {
  class User {
    // 함수 형태이지만 접근 시 멤버 변수처럼 접근한다.
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 26;

    get age(): number {
      return this.internalAge;
    }

    // set을 통해 유효성 검사
    set age(num: number) {
      if (num < 0) {
        throw Error('나이는 0보다 커야해요. 😱');
      }
      this.internalAge = num;
    }

    // 생성자에 접근제어자를 설정하면 바로 멤버 변수가 된다.
    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.age);
  console.log(user.fullName);
  user.age = 27;
  console.log(user.age);
  user.age = -2;
}
