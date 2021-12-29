namespace Abstraction {
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 인터페이스는 일종의 계약서와 같다. 해당 인터페이스로 구현한 클래스는
  // 인터페이스 내부에 규약된 코드를 반드시 구현해야 한다.
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    // coffee: string;
  }

  /**
   * 커피 머신 ⚙️
   */
  class CoffeeMachine implements CoffeeMaker {
    // public: 기본값, 생략이 가능하다. 외부에서 볼 수 있고, 조작이 가능하다.
    // private: 외부에서 절대 볼 수 없고, 접근도 할 수 없다.
    // protected: 외부에선 접근 할 수 없지만, 해당 클래스를 통해 상속한 자식 클래스는 접근이 가능하다.
    private static BEANS_GRAM_PER_SHOT: number = 5; // class level
    private coffeeBeans: number = 0; // instance (object) level
    // coffee: string = '☕️';

    // 생성자를 비공개(private)로 만들어서 항상 static한 메소드를 사용하도록 권장 할 수 있다.
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw Error('커피 콩의 값은 0보다 커야합니다.');
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('커피빈이 부족해요.');
      }
      console.log('커피빈 분쇄중... ✨');

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log('커피머신을 데우고 있어요... 🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log('커피를 내리고 있어요... ☕️');
      console.log(`남은 커피빈의 양은 ${this.coffeeBeans}입니다.`);

      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(30);
  maker.fillCoffeeBeans(90);
  const coffee = maker.makeCoffee(1);
  console.log(coffee);

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(30);
  // CoffeeMaker 인터페이스에 존재하지 않는 함수는 사용할 수가 없다.
  // maker2.fillCoffeeBeans(90);
  const coffee2 = maker2.makeCoffee(2);
  console.log(coffee2);
}
