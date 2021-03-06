{
  // JavaScript π©
  // ν¨μκ° λ³΅μ‘ν  κ²½μ°, μ΄λ€ κ°μ λ¦¬ν΄ν μ§ μ μΆνκΈ°κ° μ΄λ €μ
  // λ€λ₯Έ νμμ μΈμλ‘ μ λ¬ν  κ²½μ°, λ΄κ° μνλ λμμ΄ μλμ¬ μλ μλ€.
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript β¨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript π©
  // λ΄λΆ μ½λκ° λ§μ κ²½μ°, μλ λ¦¬ν΄κ°κΉμ§ μ€ν¬λ‘€νμ¬ λ¦¬ν΄κ°μ νμΈν΄μΌ νλ€.
  function jsFetchNum(id) {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript β¨
  // μ μ  νμμ μ μνλ€λ κ²μ μμ μ μΈ νλ‘κ·Έλλ°, μ’ λ λμ λ¬Έμν ν¨κ³Όλ₯Ό λ³Ό μ μλ€.
  // λν, ν¨μμ μ­ν μ μ’ λ μ§κ΄μ μΌλ‘ μ μ μλ€.
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // μλ°μ€ν¬λ¦½νΈμ μ΅μ λ¬Έλ² μ­μ νμμ€ν¬λ¦½νΈμμ μ¬μ©μ΄ κ°λ₯νλ€.
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // undefined
  }

  printName('Steve', 'Jobs');
  printName('Vintz');
  printName('Vintz', undefined);

  // Default parameter
  function printMessage(message: string = 'Hello World~') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  // μ ν΄μ§μ§ μμ μμ λ§€κ°λ³μλ₯Ό λ°°μ΄λ‘ λ°μ μ μλ€.
  function addNumbers(...nums: number[]): number {
    return nums.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2, 3, 4, 5));
  console.log(addNumbers(12, 25, 31, 42, 55));
}
