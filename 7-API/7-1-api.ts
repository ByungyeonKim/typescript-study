// https://github.com/microsoft/TypeScript/blob/master/lib/lib.es5.d.ts
// 인터페이스는 사용자와 의사소통 할 수 있는 규격사항이기 때문에
// '인터페이스에 정의된 함수들만 내가 사용할 수 있겠구나'라고 생각하면 된다.
// 따라서 해당 메서드의 사용법만 공부하면 되는 것이다.
// 이것은 오픈 소스라던지, API 문서를 볼 때 아주 유용하다.

Array;

type Student = {
  passed: boolean;
};

const students: Student[] = [
  { passed: true },
  { passed: true },
  { passed: false },
];

const pass = students.every((student) => {
  return student.passed;
});

console.log(pass);

type Union = string | number;

const arr: Union[] = [];
arr.push('ok', 123, 'vintz');
console.log(arr);

class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}

class Dog extends Animal {
  isDog: boolean = false;
}

const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}

console.log(animals.every<Cat>(isCat));
console.log(isCat(new Cat()));
console.log(animals.some(isCat));
