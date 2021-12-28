/**
 * Let's make a game 🕹
 */

const position = {
  x: 0,
  y: 0,
};

type Direction = 'up' | 'down' | 'left' | 'right';

function move(direction: Direction): number {
  // 함수에서 별도로 값을 리턴을 하지 않는다면 (리턴이 void타입) 그냥 break;로 작성해도 된다.
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
      throw Error(`올바른 방향이 아닙니다: ${direction}`);
  }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
