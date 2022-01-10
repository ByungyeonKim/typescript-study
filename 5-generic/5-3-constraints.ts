namespace Constraints {
  // 제네릭에 조건을 달 수 있다.
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log('풀타임이다!!');
    }
    workFullTime() {
      console.log('진촤루~');
    }
  }
  class PartTimeEmployee implements Employee {
    pay() {
      console.log('파트타임이다!!');
    }
    workPartTime() {
      console.log('진촤루우~');
    }
  }

  // 세부적인 타입을 인자로 받아서 추상적인 타입으로
  // 다시 리턴하는 함수는 좋지 않다. 💩
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  // 제네릭으로 인자를 받는 것은 너무 광범위하다.
  // 따라서 Constraint. 조건을 달아서 약간의 제약을 준다.
  const pay = <T extends Employee>(employee: T): T => {
    employee.pay();
    return employee;
  };

  const vintz = new FullTimeEmployee();
  const bob = new PartTimeEmployee();

  vintz.workFullTime();
  bob.workPartTime();

  const vintzAfterPay = pay(vintz);
  const bobAfterPay = pay(bob);
  bobAfterPay.workPartTime();

  console.log(vintzAfterPay);
  console.log(bobAfterPay);

  const obj = {
    name: 'vintz',
    age: 20,
  };

  const obj2 = {
    animal: '🦮',
  };

  console.log(getValue(obj, 'name'));
  console.log(getValue(obj, 'age'));
  console.log(getValue(obj2, 'animal'));

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
}
