namespace Composition {
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  /**
   * Composition. 상속보단 컴포지션을 더 선호하라!
   * 컴포지션은 구성요소들, 구성이라는 뜻을 의미한다.
   */
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 5; // class level
    private coffeeBeans: number = 0; // instance (object) level

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

  // 저렴한 거품기
  class CheapMlikFrother {
    private steamMilk(): void {
      console.log('우유에 거품을 내는 중이에요... 🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 설탕 제조기
  class SugarMixer {
    private getSugar(): boolean {
      console.log('사탕을 설탕으로 만들고 있어요... 🍬');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    // Dependency Injection. 의존성 주입하기
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkFrother: CheapMlikFrother
    ) {
      super(beans);
    }

    // 메소드 오버라이딩(Method overriding)
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    constructor(beans: number, private sugar: SugarMixer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  // 상속이 아닌 컴포지션으로 우유와 설탕을 둘 다 넣어보자.
  // 필요한 기능을 외부에서 주입 받음으로써, 컴포지션으로 필요한 기능을 재사용할 수 있다.
  // 코드의 재사용성 UP!
  // 하지만 치명적인 단점이 존재한다. 서로에게 굉장히 타이트하게 커플링이 되어 있다는 점.
  // 클래스와 클래스들 간에 이런 타이트한 커플링은 좋지 않다.
  // 클래스 스스로 제약 시키는 것과 같기 때문이다.
  class SweetCafeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      private sugar: SugarMixer,
      private milkFrother: CheapMlikFrother
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milkFrother.makeMilk(sugarAdded);
    }
  }

  const cheapMlikFrother = new CheapMlikFrother();
  const sugarMixer = new SugarMixer();
  const sweetCafeLatteMachine = new SweetCafeLatteMachine(
    30,
    sugarMixer,
    cheapMlikFrother
  );
  console.log(sweetCafeLatteMachine);
  const sweetCafeLatte = sweetCafeLatteMachine.makeCoffee(2);
  console.log(sweetCafeLatte);
}
