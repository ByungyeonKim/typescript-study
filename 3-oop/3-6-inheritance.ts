namespace Inheritance {
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  /**
   * Inheritance. extends ์์ ๐จโ๐ฉโ๐งโ๐ฆ
   */
  class CoffeeMachine implements CoffeeMaker {
    // public: ๊ธฐ๋ณธ๊ฐ, ์๋ต์ด ๊ฐ๋ฅํ๋ค. ์ธ๋ถ์์ ๋ณผ ์ ์๊ณ , ์กฐ์์ด ๊ฐ๋ฅํ๋ค.
    // private: ์ธ๋ถ์์ ์ ๋ ๋ณผ ์ ์๊ณ , ์ ๊ทผ๋ ํ  ์ ์๋ค.
    // protected: ์ธ๋ถ์์  ์ ๊ทผ ํ  ์ ์์ง๋ง, ํด๋น ํด๋์ค๋ฅผ ํตํด ์์ํ ์์ ํด๋์ค๋ ์ ๊ทผ์ด ๊ฐ๋ฅํ๋ค.
    private static BEANS_GRAM_PER_SHOT: number = 5; // class level
    private coffeeBeans: number = 0; // instance (object) level
    // coffee: string = 'โ๏ธ';

    // ์์ฑ์๋ฅผ ๋น๊ณต๊ฐ(private)๋ก ๋ง๋ค์ด์ ํญ์ staticํ ๋ฉ์๋๋ฅผ ์ฌ์ฉํ๋๋ก ๊ถ์ฅ ํ  ์ ์๋ค.
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw Error('์ปคํผ ์ฝฉ์ ๊ฐ์ 0๋ณด๋ค ์ปค์ผํฉ๋๋ค.');
      }
      this.coffeeBeans += beans;
      console.log(
        `์ปคํผ๋น์ ์ฑ์ ์ด์. ํ์ฌ ๋จ์ ์์ ${this.coffeeBeans}์๋๋ค.`
      );
    }

    clean() {
      console.log('์ปคํผ๋จธ์ ์ ์ฒญ์ ์ค์๋๋ค... ๐งผ');
    }

    private grindBeans(shots: number) {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('์ปคํผ๋น์ด ๋ถ์กฑํด์.');
      }
      console.log('์ปคํผ๋น ๋ถ์์ค... โจ');

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log('์ปคํผ๋จธ์ ์ ๋ฐ์ฐ๊ณ  ์์ด์... ๐ฅ');
    }

    private extract(shots: number): CoffeeCup {
      console.log('์ปคํผ๋ฅผ ๋ด๋ฆฌ๊ณ  ์์ด์... โ๏ธ');
      console.log(`๋จ์ ์ปคํผ๋น์ ์์ ${this.coffeeBeans}์๋๋ค.`);

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

  // ๊ณตํต์ ์ธ ๊ธฐ๋ฅ์ ๊ทธ๋๋ก ์ฌ์ฌ์ฉ์ ํ๊ณ , ์์ ํด๋์ค์์๋ง ํนํ๋ ๊ธฐ๋ฅ์ ์ถ๊ฐ, ํ์ฅํ  ์ ์๋ค.
  // super ํค์๋๋ฅผ ํตํด ๋ถ๋ชจ ํด๋์ค์ ๋ฉ์๋๋ฅผ ํธ์ถํ๊ฑฐ๋ ์ ๊ทผํ  ์ ์๋ค.
  class CafeLatte extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log('์ฐ์ ๋ฅผ ์คํํ๊ณ  ์์ด์... ๐จ');
    }
    // ๋ฉ์๋ ์ค๋ฒ๋ผ์ด๋ฉ(Method overriding)
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
  console.log(`์๋ฆฌ์ผ ๋๋ฒ: ${serialNumber}`);
}
