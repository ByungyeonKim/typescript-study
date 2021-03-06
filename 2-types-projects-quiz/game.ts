/**
 * Let's make a game πΉ
 */

const position = {
  x: 0,
  y: 0,
};

type Direction = 'up' | 'down' | 'left' | 'right';

function move(direction: Direction): number {
  // ν¨μμμ λ³λλ‘ κ°μ λ¦¬ν΄μ νμ§ μλλ€λ©΄ (λ¦¬ν΄μ΄ voidνμ) κ·Έλ₯ break;λ‘ μμ±ν΄λ λλ€.
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
      throw Error(`μ¬λ°λ₯Έ λ°©ν₯μ΄ μλλλ€: ${direction}`);
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
