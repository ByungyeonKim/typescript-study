namespace Inheritance {
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  /**
   * Inheritance. 상속 👨‍👩‍👧‍👦
   */
  class CoffeeMachine implements CoffeeMaker {
    // public: 기본값, 생략이 가능하다. 외부에서 볼 수 있고, 조작이 가능하다.
    // private: 외부에서 절대 볼 수 없고, 접근도 할 수 없다.
    // protected: 외부에선 접근 할 수 없지만, 해당 클래스를 통해 상속한 자식 클래스는 접근이 가능하다.
    private static BEANS_GRAM_PER_SHOT: number = 5; // class level
    private coffeeBeans: number = 0; // instance (object) level
    // coffee: string = '☕️';

    // 생성자를 비공개(private)로 만들어서 항상 static한 메소드를 사용하도록 권장 할 수 있다.
    constructor(coffeeBeans: number) {
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
      console.log(
        `커피빈을 채웠어요. 현재 남은 양은 ${this.coffeeBeans}입니다.`
      );
    }

    clean() {
      console.log('커피머신을 청소 중입니다... 🧼');
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

  // 공통적인 기능은 그대로 재사용을 하고, 자식 클래스에서만 특화된 기능을 추가, 확장할 수 있다.
  // super 키워드를 통해 부모 클래스의 메서드를 호출하거나 접근할 수 있다.
  class CafeLatte extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log('우유를 스팀하고 있어요... 💨');
    }
    // 메소드 오버라이딩(Method overriding)
    makeLatte(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const latteMachine = new CafeLatte(30, `RAINBOW8`);
  const coffee = latteMachine.makeLatte(1);
  const serialNumber = latteMachine.serialNumber;
  console.log(coffee);
  console.log(`시리얼 넘버: ${serialNumber}`);
}
