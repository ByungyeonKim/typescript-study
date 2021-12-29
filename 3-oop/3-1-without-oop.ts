namespace WithOutOop {
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAM_PER_SHOT: number = 5;

  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error('커피빈이 부족합니다.');
    }

    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;

    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeans += 30;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
