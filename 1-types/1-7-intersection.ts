namespace Intersection {
  /**
   * Intersection Types: & -> 모두 합한 것들. 이것과 저것 모두.
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work(), person.score);
  }

  internWork({
    name: 'Vintz',
    score: 95,
    employeeId: 1,
    work: () => {},
  });
}
