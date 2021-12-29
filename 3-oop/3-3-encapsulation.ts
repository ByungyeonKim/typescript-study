namespace Encapsulation {
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  /**
   * 커피 메이커 ☕️
   */
  class CoffeeMaker {
    // public: 기본값, 생략이 가능하다. 외부에서 볼 수 있고, 조작이 가능하다.
    // private: 외부에서 절대 볼 수 없고, 접근도 할 수 없다.
    // protected: 외부에선 접근 할 수 없지만, 해당 클래스를 통해 상속한 자식 클래스는 접근이 가능하다.
    private static BEANS_GRAM_PER_SHOT: number = 5; // class level
    private coffeeBeans: number = 0; // instance (object) level

    // 생성자를 비공개(private)로 만들어서 항상 static한 메소드를 사용하도록 권장 할 수 있다.
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw Error('커피 콩의 값은 0보다 커야합니다.');
      }
      this.coffeeBeans += beans;
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

  const maker = CoffeeMaker.makeMachine(50);
  console.log(maker);
  maker.fillCoffeeBeans(50);
  console.log(maker);
}
