{
  // Array
  const fruits: string[] = ['π', 'π'];
  const scores: Array<number> = [1, 2, 5];
  // readonlyλ μμ§ string[]μ νμλ§ μ§μνλ€. 2λ²μ§Έ λ°©λ²μ β
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, classλ‘ λμ²΄νλ κ²μ΄ μ’λ€.
  // λ°λΌμ Tupleμ κΆμ₯νμ§ μλλ€.
  // μ μ°νκ² μ νμ©ν μμλ λ¦¬μ‘νΈ νμ useState()μ΄λ€.
  // λμ μΌλ‘ λ¦¬ν΄νκ³ , μ¬λ¬ νμμ λ°μ΄ν°κ° μ‘΄μ¬νλ©° μ¬μ©μκ° μ΄λ¦μ μ μν΄μ μΈ κ²½μ°
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
