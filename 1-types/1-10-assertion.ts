namespace Assertion {
  /**
   * Type Assertions π© -> νμ κ°μνκΈ°
   * μ¬μ©μ΄ λΆκ°νΌν κ²½μ°μλ§ μ¬μ©νμ.
   */

  // μμ) λμ νμμΈ μλ°μ€ν¬λ¦½νΈμ μ°λν  λ
  function jsStrFunc(): any {
    return 'hello~!';
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);
  console.log(result.length);

  // const wrong: any = 5;
  // console.log((wrong as Array<number>).push(1)); // π±

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  // λ¬΄μ‘°κ±΄ μ΅μμ΄ μμ΄!
  numbers.push(2);
  const button = document.querySelector('class')!;
}
