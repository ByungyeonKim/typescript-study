namespace Class {
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT: number = 5; // class level
    coffeeBeans: number = 0; // instance (object) level

    // 생성자(constructor)는 객체(object)가 만들어질 때 딱 한번 호출되는 생성자 함수이다.
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // static 함수로 구현할 경우, class level에서 바로 사용이 가능하기 때문에
    // 새로운 객체를 생성하지 않고 바로 클래스에서 사용이 가능하다.
    // 예를들어 Math같은 경우 new 연산자를 사용하지 않고 바로 사용이 가능한 것을 볼 수 있다.
    // 이렇게 생성 로직을 잘 감추어 줌으로써 간단하게 여러 기계들을 생성할 수 있다.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('커피빈이 부족합니다.');
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(30);
  console.log(maker);
  const maker2 = new CoffeeMaker(70);
  console.log(maker2);
  const maker3 = CoffeeMaker.makeMachine(77);
  console.log(maker3);
  const coffee = maker3.makeCoffee(2);
  console.log(coffee);
}
