namespace Composition {
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  /**
   * Composition. 상속보단 컴포지션을 더 선호하라!
   * 컴포지션은 구성요소들, 구성이라는 뜻을 의미한다.
   * v2 클래스 자체로 커플링이 된 것은 좋지 않다. 인터페이스로 디커플링을 해보자. 확장이 유연해진다!
   */
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 5; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(
      coffeeBeans: number,
      private sugar: SugarProvider,
      private milk: MilkFrother
    ) {
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  // 저렴한 거품기
  class CheapMlikFrother implements MilkFrother {
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

  // 트렌디하고 예쁜 거품기
  class FancyMlikFrother implements MilkFrother {
    private steamMilk(): void {
      console.log('멋지게✨ 우유에 거품을 내는 중이에요... 🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 차갑게 내는 거품기?!
  class ColdMlikFrother implements MilkFrother {
    private steamMilk(): void {
      console.log('차갑게❄️ 우유에 거품을 내는 중이에요... 🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 우유는 안넣을게요 🙅🏻‍♂️
  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 사탕 설탕 제조기
  class CandySugarMixer implements SugarProvider {
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

  // 자체 설탕 제조기
  class SugarMixer implements SugarProvider {
    private getSugar(): boolean {
      console.log('설탕을 만들고 있어요... 🍭');
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

  // 설탕은 안넣을게요 🙅🏻‍♂️
  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 🍬
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // 🥛
  const cheapMlikFrother = new CheapMlikFrother();
  const fancyMlikFrother = new FancyMlikFrother();
  const coldMlikFrother = new ColdMlikFrother();
  const noMilk = new NoMilk();

  // ⚙️ 같은 클래스를 재사용하면서 서로 다른 객체를 만들어서 용도에 맞게 사용할 수 있게 됐다.
  const sweetCandyMachine = new CoffeeMachine(12, candySugar, noMilk);
  const sweetMachine = new CoffeeMachine(20, sugar, noMilk);

  const cafeLatteMachine = new CoffeeMachine(12, noSugar, cheapMlikFrother);
  const fancyCafeLatteMachine = new CoffeeMachine(
    36,
    noSugar,
    fancyMlikFrother
  );
  const coldCafeLatteMachine = new CoffeeMachine(24, noSugar, coldMlikFrother);
  const sweetCafeLatteMachine = new CoffeeMachine(
    30,
    candySugar,
    cheapMlikFrother
  );

  console.log(fancyCafeLatteMachine);
  console.log(coldCafeLatteMachine);
  console.log(sweetCafeLatteMachine);
}
