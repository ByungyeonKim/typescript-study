namespace Exception {
  // Java: Exception
  // JavaScript: Error
  // Error(Exception) Handling: try -> catch -> finally
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

  function readFile(fileName: string): string {
    if (fileName === 'not exist! 💩') {
      throw new Error(`file not exist! ${fileName}`);
    }
    return 'file contents 📄';
  }

  function closeFile(fileName: string) {
    //
  }

  function run() {
    const fileName = 'not exist! 💩';

    // try 안에 이것저것 코드를 작성하기보다는
    // 에러가 발생하는 부분만 try로 감싸서 catch와 finally하는 것이 더 좋다.
    try {
      console.log(readFile(fileName));
    } catch (error) {
      console.log('catched!!');
      return;
    } finally {
      closeFile(fileName);
      console.log('finally!!');
    }
  }
  run();
  console.log('어플이 다운되지 않았다!');
}
