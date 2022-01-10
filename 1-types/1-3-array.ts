{
  // Array
  const fruits: string[] = ['🍓', '🍉'];
  const scores: Array<number> = [1, 2, 5];
  // readonly는 아직 string[]의 형식만 지원한다. 2번째 방법은 ❎
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class로 대체하는 것이 좋다.
  // 따라서 Tuple은 권장하지 않는다.
  // 유연하게 잘 활용한 예시는 리액트 훅의 useState()이다.
  // 동적으로 리턴하고, 여러 타입의 데이터가 존재하며 사용자가 이름을 정의해서 쓸 경우
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
