namespace Exception {
  // Java: Exception
  // JavaScript: Error
  // Exception Handling
  // 런타임 환경이 아닌 컴파일 단계에서 error가 뜨도록 하자.

  type Direction = 'up' | 'down' | 'left' | 'right';

  const position = {
    x: 0,
    y: 0,
  };

  function move(direction: Direction): number {
    switch (direction) {
      case 'up':
        return (position.y += 1);
      case 'down':
        return (position.y -= 1);
      case 'left':
        return (position.x -= 1);
      case 'right':
        return (position.x += 1);
      default:
        // never를 활용해서 컴파일 단계에서 에러를 처리할 수 있다.
        const invalid: never = direction;
        throw Error(`올바른 방향이 아닙니다: ${invalid}`);
    }
  }
  move('up');
  move('right');
  console.log(position);
}
