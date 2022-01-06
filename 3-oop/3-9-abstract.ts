namespace Abstract {
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  /**
   * Abstract. 클래스 내부에서 수행되어야 하는 함수의 절차가 중요하거나,
   * 자식 클래스에서 달라져야 하는 행동이 명확한 경우에 abstract 클래스를 쓸 수 있다.
   */
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 5;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
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

    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log('우유를 스팀하고 있어요... 💨');
    }
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CafeLatteMachine(20, 'R21'),
    new SweetCoffeeMachine(30),
    new CafeLatteMachine(20, 'R21'),
    new SweetCoffeeMachine(30),
  ];

  machines.forEach((machine) => {
    console.log(machine.makeCoffee(2));
    console.log('--------------------------------');
  });
}
